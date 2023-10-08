import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgXRRXu_KZPP52Xp2pkLKo_nVBzA2XOEQ",
  authDomain: "ssioux-porfolio-dashboard.firebaseapp.com",
  projectId: "ssioux-porfolio-dashboard",
  storageBucket: "ssioux-porfolio-dashboard.appspot.com",
  messagingSenderId: "412375272213",
  appId: "1:412375272213:web:400cb84fb92060652af71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Authorization
export const auth = getAuth()
// auth Provider
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, provider) // 1- auth , 2- provider (args)
