# firebase-auth-example with Vue & Vuex
a simple app demonstrating how to integrate firebase authentication with Vue.js and Vuex

## Installation
- clone this repo to your computer
- make sure you have firebase account
- create a project in firebase
- enable authentication (e.g email authentication, google authentication)
  * you have to get client_ID and client_secret from the site which you want to enable firebase auth (except for google and email)
- get firebase project config from firebase console (in firebase console: project settings (the gear icon near project overview) )
- paste firebase project config in /src/config/firebase-config.js

firebase config looks like this
```
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```
