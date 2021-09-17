import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCiHrX7sGHOdsXrFtVV4wiEVz-5psP6PsY",
    authDomain: "doctors-website-12eb0.firebaseapp.com",
    projectId: "doctors-website-12eb0",
    storageBucket: "doctors-website-12eb0.appspot.com",
    messagingSenderId: "999100176409",
    appId: "1:999100176409:web:9423102418a3f71ee47288"
  

});

var db=firebase.firestore();

export{ db };