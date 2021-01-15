import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDknL20XFpBygCoCPDfS_0RDrXLl677RWo",
    authDomain: "calendar-app-7f82f.firebaseapp.com",
    projectId: "calendar-app-7f82f",
    storageBucket: "calendar-app-7f82f.appspot.com",
    messagingSenderId: "944145965728",
    appId: "1:944145965728:web:70d9bd464a1618b8d15fc5"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}