import {getApp , getApps , initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxiWe0f4Ss3KlE4tBEG1tsUvsJuM07wZY",
  authDomain: "chatgpt-clone-7d996.firebaseapp.com",
  projectId: "chatgpt-clone-7d996",
  storageBucket: "chatgpt-clone-7d996.appspot.com",
  messagingSenderId: "652411105374",
  appId: "1:652411105374:web:157a40885ab6dc42fd84cf"
};

// Initialize Firebase
// singleton pattern of codding 
const app = getApps().length? getApp() : initializeApp(firebaseConfig);

// Now get the Database from the storage 

const db = getFirestore(app) ; 

export {db} ; 
