// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi0JCvmhwSJOhJoydJB6ijRohiky18N-k",
  authDomain: "astroshop-cff44.firebaseapp.com",
  projectId: "astroshop-cff44",
  storageBucket: "astroshop-cff44.appspot.com",
  messagingSenderId: "696784235970",
  appId: "1:696784235970:web:94a5731101b0c49ec83a5b",
  measurementId: "G-DXMHLX4W92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app)