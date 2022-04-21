import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRKKop33HseqBohThxfrbdeAffY9ZUuFI",
  authDomain: "crazybillz-bc7ce.firebaseapp.com",
  projectId: "crazybillz-bc7ce",
  storageBucket: "crazybillz-bc7ce.appspot.com",
  messagingSenderId: "1030848363081",
  appId: "1:1030848363081:web:4a1228d1f29103fddb9d98",
  measurementId: "G-ENEGDGH883"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

//created exportable variables to use instead of functions
export {auth,fs,storage}