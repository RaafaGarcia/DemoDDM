
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)



var Firebase = require("firebase/app");

// Add the Firebase products that you want to use

require("firebase/firestore");
// import * as firebase from 'firebase/app'
// import * as firebase from 'firebase/app'
// Get a Firestore instance
const firebaseConfig = {
    apiKey: "AIzaSyD_5nu4Dts6edS24qhajzyuUBLeaspLVCo",
    authDomain: "dimmsaapp.firebaseapp.com",
    databaseURL: "https://dimmsaapp.firebaseio.com",
    projectId: "dimmsaapp",
    storageBucket: "dimmsaapp.appspot.com",
    messagingSenderId: "1074787345848",
    appId: "1:1074787345848:web:4544966f61339957b41b4d",
    measurementId: "G-M43984KRG6"
  };
  
  // Initialize Firebase
  

export const db = Firebase.initializeApp(firebaseConfig)
  .firestore()

  export const TimeStamp = Firebase.firestore;
 
