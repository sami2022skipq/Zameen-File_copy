// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpKWhLmZGoIMS8GtWCJSTmK7jGOzQA7mM",
  authDomain: "scrimba-learning-8ee63.firebaseapp.com",
  databaseURL: "https://scrimba-learning-8ee63-default-rtdb.firebaseio.com",
  projectId: "scrimba-learning-8ee63",
  storageBucket: "scrimba-learning-8ee63.appspot.com",
  messagingSenderId: "874473532789",
  appId: "1:874473532789:web:a8c50331eb56401250773c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider);
};

export const getUserLogout = () => {
  signOut(auth);
};