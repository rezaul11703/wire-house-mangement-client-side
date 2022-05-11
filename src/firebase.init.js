// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUPWGJ-XJLRJzICa0ZVUyDyXB7mi9z-JY",
  authDomain: "smart-inventory-solution.firebaseapp.com",
  projectId: "smart-inventory-solution",
  storageBucket: "smart-inventory-solution.appspot.com",
  messagingSenderId: "661162768986",
  appId: "1:661162768986:web:a693b95b7aebe2cf173663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export default auth;