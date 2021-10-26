import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCm9p-RO0yF0dX8PUHEE6nHIgOHWZ4WGuY",
    authDomain: "orthomanish-ab27d.firebaseapp.com",
    projectId: "orthomanish-ab27d",
    storageBucket: "orthomanish-ab27d.appspot.com",
    messagingSenderId: "363215243257",
    appId: "1:363215243257:web:8b5d19fcaec2424217df28"
  
});

var db=firebase.firestore();

export{ db };
