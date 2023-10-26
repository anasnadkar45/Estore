// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmRiRsuzv2HfM9Jlt7GyAplPvSLYGz0Y",
  authDomain: "myfirstapp-e23d3.firebaseapp.com",
  projectId: "myfirstapp-e23d3",
  storageBucket: "myfirstapp-e23d3.appspot.com",
  messagingSenderId: "200702409604",
  appId: "1:200702409604:web:eb66dd51d8f11ed0633bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}