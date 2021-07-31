const firebase = require('firebase')

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBANQOxzEvuUMnGEoHAJ-szwMVvIoUuIoM",
    authDomain: "data-echo.firebaseapp.com",
    projectId: "data-echo",
    storageBucket: "data-echo.appspot.com",
    messagingSenderId: "1041178756393",
    appId: "1:1041178756393:web:efdbc0993299da102aa338"
}

export default function firebaseClient(){
    // if a Firebase instance doesn't exist, create one
    if(!firebase.apps.length){
        firebase.initializeApp(FIREBASE_CONFIG)
    }
}