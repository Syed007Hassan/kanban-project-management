// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // firebase: {
  //   apiKey: 'YOUR_API_KEY',
  //   authDomain: 'YOUR_AUTH_DOMAIN',
  //   projectId: 'YOUR_PROJECT_ID',
  //   storageBucket: 'YOUR_STORAGE_BUCKET',
  //   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  //   appId: 'YOUR_APP_ID',
  //   measurementId: 'YOUR_MEASUREMENT_ID',
  // },
  firebase: {
    apiKey: "AIzaSyBIfIPscdOCGXm6t0hOsKsA1c72D7J5Zt0",
    authDomain: "netlix-mern.firebaseapp.com",
    projectId: "netlix-mern",
    storageBucket: "netlix-mern.appspot.com",
    messagingSenderId: "779994311329",
    appId: "1:779994311329:web:61e5d96918c6d53a785ee0",
    measurementId: "G-B43F8D93DL",
  },
  serverUrl: 'http://localhost:3000',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
