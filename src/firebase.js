import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6H53bRqzEmj379dkD32AT11XN1_UZ6uk",
  authDomain: "linkedin-clone-6e76e.firebaseapp.com",
  projectId: "linkedin-clone-6e76e",
  storageBucket: "linkedin-clone-6e76e.appspot.com",
  messagingSenderId: "68581156675",
  appId: "1:68581156675:web:e62e194d27216801f9f1f6",
  measurementId: "G-GKPCBG9PED"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }