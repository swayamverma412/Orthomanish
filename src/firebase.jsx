import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCU7qc2jDOpcvWTalXWLiypyJIySqyl3kg",
  authDomain: "orthomanish-90ed8.firebaseapp.com",
  projectId: "orthomanish-90ed8",
  storageBucket: "orthomanish-90ed8.appspot.com",
  messagingSenderId: "423275903748",
  appId: "1:423275903748:web:187efd98bb8d3324bdae51",
  measurementId: "G-7SCGHLQ202"
});

var db = firebase.firestore();

export { db };
