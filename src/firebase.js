// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5LQ9Jc1FavU4J7v7WDUo4jD120NI7vpI",
  authDomain: "second-ecommerce.firebaseapp.com",
  projectId: "second-ecommerce",
  storageBucket: "second-ecommerce.appspot.com",
  messagingSenderId: "264463083914",
  appId: "1:264463083914:web:b3a0941d3daaed423d8073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

