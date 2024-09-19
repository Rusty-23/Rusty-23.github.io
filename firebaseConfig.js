import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD56W7U80PBZJhbEeFTbsyU3oUxFCUoKeM",
    authDomain: "vendocu-b7a95.firebaseapp.com",
    databaseURL: "https://vendocu-b7a95-default-rtdb.firebaseio.com",
    projectId: "vendocu-b7a95",
    storageBucket: "vendocu-b7a95.appspot.com",
    messagingSenderId: "103599698344",
    appId: "1:103599698344:web:cb9a4508656837c7486d9d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };