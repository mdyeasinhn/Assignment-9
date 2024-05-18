// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa_CeKcIz5hKNyAHSkIuJxEvspN5X6VY4",
  authDomain: "assignment-9-54dbc.firebaseapp.com",
  projectId: "assignment-9-54dbc",
  storageBucket: "assignment-9-54dbc.appspot.com",
  messagingSenderId: "355005608393",
  appId: "1:355005608393:web:ef2719496de6d490e53818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)