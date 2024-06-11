// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBOdaOlW-sGlM6wMQlHEir4pJe3FCGt9CM',
  authDomain: 'ecomerce-book.firebaseapp.com',
  projectId: 'ecomerce-book',
  storageBucket: 'ecomerce-book.appspot.com',
  messagingSenderId: '59969892900',
  appId: '1:59969892900:web:05bc2ad82d56db669b5eb1',
  measurementId: 'G-J73XM347X6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export function firestore() {
  throw new Error('Function not implemented.');
}
