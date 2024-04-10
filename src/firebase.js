// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-clone-a2294.firebaseapp.com",
  projectId: "insta-clone-a2294",
  storageBucket: "insta-clone-a2294.appspot.com",
  messagingSenderId: "633061623384",
  appId: "1:633061623384:web:75fa2eae2bcc50f8ceac2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);