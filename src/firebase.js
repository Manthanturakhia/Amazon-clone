import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7XPFP-N9rC8ATbZXmFaReJWunDPxT05A",
    authDomain: "clone-68816.firebaseapp.com",
    databaseURL: "https://clone-68816.firebaseio.com",
    projectId: "clone-68816",
    storageBucket: "clone-68816.appspot.com",
    messagingSenderId: "194867040968",
    appId: "1:194867040968:web:6597f83634830d3cbecbfd",
    measurementId: "G-SH57WJ5N96"
});


const auth = firebase.auth();

export {auth};