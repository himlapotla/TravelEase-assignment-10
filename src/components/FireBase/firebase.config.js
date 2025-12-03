// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkNQHPCPtXkWCveF83CM8pqVY60UtYbzc",
  authDomain: "travelease-dac98.firebaseapp.com",
  projectId: "travelease-dac98",
  storageBucket: "travelease-dac98.firebasestorage.app",
  messagingSenderId: "287543966836",
  appId: "1:287543966836:web:23287a420a7c4c2c92e521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app