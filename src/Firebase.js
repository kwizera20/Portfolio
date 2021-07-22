import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyAvdPmfrV1a2YU1huU1SMnf1IjTFysIbBo",
  authDomain: "mamamusa-1.firebaseapp.com",
  projectId: "mamamusa-1",
  storageBucket: "mamamusa-1.appspot.com",
  messagingSenderId: "229040214796",
  appId: "1:229040214796:web:2d75a2e958a7d051dcef29",
  measurementId: "G-8K3XCC30J0"
});

var db = firebaseApp.firestore();

export { db };