// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN0inpEATDe6uQ5Li1J0ff30sQSIX8u5Q",
  authDomain: "book-list-with-firebase-37491.firebaseapp.com",
  projectId: "book-list-with-firebase-37491",
  storageBucket: "book-list-with-firebase-37491.appspot.com",
  messagingSenderId: "1090435047282",
  appId: "1:1090435047282:web:d21b67ef84ccf14a32c7eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

