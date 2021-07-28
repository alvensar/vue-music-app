import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGuJOh2DEuus3xY4c5c4T1m3FogpZmZ10',
  authDomain: 'music-app-1d0de.firebaseapp.com',
  projectId: 'music-app-1d0de',
  storageBucket: 'music-app-1d0de.appspot.com',
  messagingSenderId: '246403065145',
  appId: '1:246403065145:web:c34a8202777bd9e45e34e8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection('users');

export {
  auth,
  db,
  userCollection,
};