// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCyrx_nwi6E2Al_szF2ZX0262AWeQJZpqM",
  authDomain: "clone-2afa3.firebaseapp.com",
  projectId: "clone-2afa3",
  storageBucket: "clone-2afa3.appspot.com",
  messagingSenderId: "919369783875",
  appId: "1:919369783875:web:4610aedae6aae7d30052f6",
  measurementId: "G-85QJ1FHWRK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };