import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClsphYgjE915bzEoFoKXppJ0kyaifmevM",
  authDomain: "kingandboss.firebaseapp.com",
  projectId: "kingandboss",
  storageBucket: "kingandboss.appspot.com",
  messagingSenderId: "710766397488",
  appId: "1:710766397488:web:056567e95a53fd88a705f5",
  measurementId: "G-M22F11NZZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
