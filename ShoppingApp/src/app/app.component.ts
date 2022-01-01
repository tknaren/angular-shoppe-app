import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration   } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Component, OnInit, OnDestroy, Inject, EventEmitter, createNgModuleRef } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const GRAPH_ENDPOINT = environment.ShopAPI.graph_endpoint;

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = environment.ShopAPI.title;
  isIframe = false;
  loginDisplay = false;  
  profile!:ProfileType;
  displayName:String = "Guest";
  private readonly _destroying$ = new Subject<void>();

  /**
   *
   */
  constructor(
    @Inject(MSAL_GUARD_CONFIG) 
    private msalGuardConfig: MsalGuardConfiguration,
    private broadcastService: MsalBroadcastService,
    private authService: MsalService,
    private http:HttpClient) {
  }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
    
    this.broadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
        this.setDisplayName(result);
      });

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
    })    
  }

 
  login(event:any) {
    if (this.msalGuardConfig.authRequest){
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  logout(event:any) { // Add log out function here
    this.authService.logoutRedirect({
      postLogoutRedirectUri: environment.ShopAPI.redirectUri
    });
  }  

  getProfile(event:any) {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
        console.log(this.profile);
      });
  }  

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  setDisplayName(result: any) {
    this.displayName = result.payload.account.name;
    console.log("display name " + result.payload.account.name);
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }  
}
