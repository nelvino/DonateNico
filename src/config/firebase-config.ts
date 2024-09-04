// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhuu53TGhuN2l6fj2LRK5tTxKDa0-hLmY",
  authDomain: "donatenico.firebaseapp.com",
  projectId: "donatenico",
  storageBucket: "donatenico.appspot.com",
  messagingSenderId: "1093607123453",
  appId: "1:1093607123453:web:627102cf85543f0d6e9194",
  measurementId: "G-7FZEG0GKJH",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
