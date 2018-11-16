import * as firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLVcEcuwKSdZg51f6wBigSTm3kEsiiiyk",
    authDomain: "diary-fed84.firebaseapp.com",
    databaseURL: "https://diary-fed84.firebaseio.com",
    projectId: "diary-fed84",
    storageBucket: "diary-fed84.appspot.com",
    messagingSenderId: "932016790749"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')