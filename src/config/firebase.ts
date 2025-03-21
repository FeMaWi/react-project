// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBfn4naAzLGsMmimUR1iQg5Hzzz3pbuorA",

  authDomain: "react-project-2cd3f.firebaseapp.com",

  projectId: "react-project-2cd3f",

  storageBucket: "react-project-2cd3f.firebasestorage.app",

  messagingSenderId: "197758790870",

  appId: "1:197758790870:web:2d08f6c87ff5df8b8a2d77"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);