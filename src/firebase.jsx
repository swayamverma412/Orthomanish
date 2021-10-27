import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLyYU8DjQiPgybUR4X2_Zo9X-zNSDS9Ek",
  authDomain: "orthomanish-f6e8a.firebaseapp.com",
  projectId: "orthomanish-f6e8a",
  storageBucket: "orthomanish-f6e8a.appspot.com",
  messagingSenderId: "591658081746",
  appId: "1:591658081746:web:77cd6c2128adcf61b1bc0b",
  measurementId: "G-Z7XB5G508S",
});

var db = firebase.firestore();

export { db };
