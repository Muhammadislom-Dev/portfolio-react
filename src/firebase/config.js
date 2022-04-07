import { firebase } from '@firebase/app';
import '@firebase/firestore'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ilosrim.firebaseapp.com",
  projectId: "ilosrim",
  storageBucket: "ilosrim.appspot.com",
  messagingSenderId: "18566296721",
  appId: "1:18566296721:web:fcd41a9077829596c07b30",
  measurementId: "G-CCQ1L4X51G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = app.firestore();

export default db;