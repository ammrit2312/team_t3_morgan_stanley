// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByxbpQ3iZWMR_6W2_Hsz-1_vZZ7-W7Ui0",
  authDomain: "t3-morgan-stanley-b7248.firebaseapp.com",
  projectId: "t3-morgan-stanley-b7248",
  storageBucket: "t3-morgan-stanley-b7248.appspot.com",
  messagingSenderId: "78450411322",
  appId: "1:78450411322:web:13fb467dc2587a812fb203",
  measurementId: "G-1L0W4VBVB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);