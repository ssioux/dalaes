import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgXRRXu_KZPP52Xp2pkLKo_nVBzA2XOEQ',
  authDomain: 'ssioux-porfolio-dashboard.firebaseapp.com',
  projectId: 'ssioux-porfolio-dashboard',
  storageBucket: 'ssioux-porfolio-dashboard.appspot.com',
  messagingSenderId: '412375272213',
  appId: '1:412375272213:web:400cb84fb92060652af71c',
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
