import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDN1DlIE9PqBhKaZy54Q9wO-jk8xAr4PFQ",
    authDomain: "e-ride-a60e3.firebaseapp.com",
    projectId: "e-ride-a60e3",
    storageBucket: "e-ride-a60e3.appspot.com",
    messagingSenderId: "432428480537",
    appId: "1:432428480537:web:157321e844db94ed1bd288"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
