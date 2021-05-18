import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCR25M_M6ukJ34jPnhQbPpQtqIQfDPlpVM",
    authDomain: "instagram-clone-3ed6a.firebaseapp.com",
    databaseURL: "https://instagram-clone-3ed6a-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-3ed6a",
    storageBucket: "instagram-clone-3ed6a.appspot.com",
    messagingSenderId: "883697459343",
    appId: "1:883697459343:web:04299aa78760da0b0b10fa",
    measurementId: "G-9V3S8EE283"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage}

  
//export default firebaseConfig;