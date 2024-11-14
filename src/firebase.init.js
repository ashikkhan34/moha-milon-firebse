// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8LUDP2062IQRrxnGhYNCGK6nk8ZCVRt4",
  authDomain: "moha-milon-firebase-a46af.firebaseapp.com",
  projectId: "moha-milon-firebase-a46af",
  storageBucket: "moha-milon-firebase-a46af.firebasestorage.app",
  messagingSenderId: "15834483837",
  appId: "1:15834483837:web:32cbc11f3e6c5e200b3514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);