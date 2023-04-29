// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvduW2OUucjDmD_885cL3gk3Lxzxu1d7A",
  authDomain: "dagon-news-eda0e.firebaseapp.com",
  projectId: "dagon-news-eda0e",
  storageBucket: "dagon-news-eda0e.appspot.com",
  messagingSenderId: "723466687994",
  appId: "1:723466687994:web:c137340b335a2812244043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;