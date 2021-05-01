import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB47lnb339qMgHfHYxrhIV7csvIaZgqIC0",
    authDomain: "disneyplus-clone-f1195.firebaseapp.com",
    projectId: "disneyplus-clone-f1195",
    storageBucket: "disneyplus-clone-f1195.appspot.com",
    messagingSenderId: "344090763",
    appId: "1:344090763:web:5df01a2ebd915b7f0b0c8e",
    measurementId: "G-0Z41XVMHS6"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;