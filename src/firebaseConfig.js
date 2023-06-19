import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYJnDjxvSHQD4I9AQ1uFkR5jQXGxv8knA",
    authDomain: "accio-job-project.firebaseapp.com",
    projectId: "accio-job-project",
    storageBucket: "accio-job-project.appspot.com",
    messagingSenderId: "615953280726",
    appId: "1:615953280726:web:cd861be7c321c0fcdce377",
    measurementId: "G-9D3RRCNBKP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();

  export {auth, db};