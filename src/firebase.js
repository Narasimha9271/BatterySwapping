// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVo7B9WSUpRn0e-99HaNluHi9yFSeRsNI",
    authDomain: "fir-frontend9271.firebaseapp.com",
    projectId: "fir-frontend9271",
    storageBucket: "fir-frontend9271.appspot.com",
    messagingSenderId: "241557643718",
    appId: "1:241557643718:web:d3249fb6be5f76252e12c7",
    measurementId: "G-5DHP5PX5L8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
