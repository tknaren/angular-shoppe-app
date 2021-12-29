import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent implements OnInit {
  @Input() loginDisplay:Boolean = false
  @Input() displayName:String = "Guest"
  @Output() navLogin = new EventEmitter();
  @Output() navLogout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  navBarLogin(){
    this.navLogin.emit('login');
  }

  navBarLogout(){
    this.navLogout.emit('logout');
  }

}
