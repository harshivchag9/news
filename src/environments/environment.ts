// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  country: 'IN',
  NewsAPI_URL: 'https://harshiv-news-api.herokuapp.com',
  // NewsAPI_URL: 'https://newsapi.org/v2/top-headlines',
  NewsAPI_KEY: '77c0314a614c44edb1491183e4d58d99',
  LocationAPI_URL: 'https://ipinfo.io/json?token=512fe38d5c8c4b'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
