// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ShopAPI : {
    url: "https://tknaren-shopapi.azurewebsites.net/",
    redirectUri: "https://tknaren-shoppe.azurewebsites.net",
    clientId: "7766984a-b2b5-4713-9107-2528811ad465",
    authority: "https://login.microsoftonline.com/consumers",
    graph_endpoint: "https://graph.microsoft.com/v1.0/me",
    title: "ShoppingApp"
  }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
