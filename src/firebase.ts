// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3jmVc4KCGrocEB7ktdzUHcCIl69dcuHk",
  authDomain: "possum-riot.firebaseapp.com",
  projectId: "possum-riot",
  storageBucket: "possum-riot.firebasestorage.app",
  messagingSenderId: "1081460098978",
  appId: "1:1081460098978:web:a62eca29ff4e2c258d54fb",
  measurementId: "G-FJS9HYZ472",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
