// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBSR2Hfx1waP7sIt2__apNc09BZLPhu5I",
    authDomain: "flashcards-3a251.firebaseapp.com",
    projectId: "flashcards-3a251",
    storageBucket: "flashcards-3a251.appspot.com",
    messagingSenderId: "143914677950",
    appId: "1:143914677950:web:551096eeaef526bf2d90ef"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;