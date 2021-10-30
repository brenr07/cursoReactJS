import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjfx8dMG5lq3rIoq-2bluqwfbXatDwGUo",
  authDomain: "lasalbarello.firebaseapp.com",
  projectId: "lasalbarello",
  storageBucket: "lasalbarello.appspot.com",
  messagingSenderId: "1011828488917",
  appId: "1:1011828488917:web:e36ae587aed7c9351c405c"
};


const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}