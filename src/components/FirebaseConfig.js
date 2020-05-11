import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkhJDOHRssMw_tElIwARMuRwtIFZ7R6i8",
    authDomain: "klassprojekt-d562d.firebaseapp.com",
    databaseURL: "https://klassprojekt-d562d.firebaseio.com",
    projectId: "klassprojekt-d562d",
    storageBucket: "klassprojekt-d562d.appspot.com",
    messagingSenderId: "492382706490",
    appId: "1:492382706490:web:2046fc59e613e40b7e4e03",
    measurementId: "G-CLWVGYBS87"
};

firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots:true});

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase;