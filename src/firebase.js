import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}
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
