// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDImehnt1_svqgY7ussEylEALJI22QISTM",
  authDomain: "diogomendesweb-80451.firebaseapp.com",
  projectId: "diogomendesweb-80451",
  storageBucket: "diogomendesweb-80451.appspot.com",
  messagingSenderId: "985644447374",
  appId: "1:985644447374:web:270633bbbda0ecbde93bdf",
  measurementId: "G-5VLGV2M9BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// FireStore
export const db = getFirestore(app);
//Get Storage
export const storage = getStorage(app)