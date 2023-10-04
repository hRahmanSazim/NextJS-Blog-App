// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBG-ndNKQmYoemifTMh-D9zMmcBf4AcPyY",
  authDomain: "nextjs-sazim-blog-app.firebaseapp.com",
  projectId: "nextjs-sazim-blog-app",
  storageBucket: "nextjs-sazim-blog-app.appspot.com",
  messagingSenderId: "631645538532",
  appId: "1:631645538532:web:a18623c87c6a37c19704f1",
  measurementId: "G-BR2MM7SLY3",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(firebase_app);
export default firebase_app;
