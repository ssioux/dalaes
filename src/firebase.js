import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDXGsCnJDh9SQNaPKkEluPOEOus3f9uig0",
  authDomain: "dalaes-a85cb.firebaseapp.com",
  projectId: "dalaes-a85cb",
  storageBucket: "dalaes-a85cb.appspot.com",
  messagingSenderId: "794215958928",
  appId: "1:794215958928:web:cd6a314de71c27f04c8b15"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Authorization
export const auth = getAuth()
// auth Provider
const provider = new GoogleAuthProvider()
// storage
export const storage = getStorage(app)
// Database
export const db = getFirestore(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider) // 1- auth , 2- provider (args)
