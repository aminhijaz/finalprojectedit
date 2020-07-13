const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");

var firebaseConfig = {
    apiKey: "AIzaSyBJWNVmSDWlVq5RwcMK9lzjAuntS2i6o7U",
    authDomain: "help-a50e3.firebaseapp.com",
    databaseURL: "https://help-a50e3.firebaseio.com",
    projectId: "help-a50e3",
    storageBucket: "help-a50e3.appspot.com",
    messagingSenderId: "329238025900",
    appId: "1:329238025900:web:6aec57c7a25b705cdc7109",
    measurementId: "G-9RH8V7ELHM"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth= firebase.auth()
export { firebase, db as default,auth };