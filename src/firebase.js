// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAX-ZdrZqePTi-ap0gETLnbz-Opp6JuqQw",
  authDomain: "ig-reels-clone-2a54f.firebaseapp.com",
  projectId: "ig-reels-clone-2a54f",
  storageBucket: "ig-reels-clone-2a54f.appspot.com",
  messagingSenderId: "420777363439",
  appId: "1:420777363439:web:18f379fbe8922aba68181a",
  measurementId: "G-E4SPGKR627"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;
