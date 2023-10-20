// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlIOGjTUtHd1WI7OU6tExo9sjlksOd4Gs',
  authDomain: 'testanswer-77367.firebaseapp.com',
  projectId: 'testanswer-77367',
  storageBucket: 'testanswer-77367.appspot.com',
  messagingSenderId: '493948350363',
  appId: '1:493948350363:web:faf1905e6c90992306fb3e'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
