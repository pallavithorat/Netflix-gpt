// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_n-vsL2vM52b-Ku3VBMOKIpVxKiGrufU",
  authDomain: "app1-13961.firebaseapp.com",
  projectId: "app1-13961",
  storageBucket: "app1-13961.appspot.com",
  messagingSenderId: "641073384487",
  appId: "1:641073384487:web:06d29d3268939ed0449202",
  measurementId: "G-W9T40JJLWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();