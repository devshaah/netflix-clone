import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmVYw-sY-7vhbSiZyvXEWWV13_RHrpA-8",
  authDomain: "netflix-clone-3ba6b.firebaseapp.com",
  projectId: "netflix-clone-3ba6b",
  storageBucket: "netflix-clone-3ba6b.appspot.com",
  messagingSenderId: "175576613416",
  appId: "1:175576613416:web:c141973552b5d34ed32b1d"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;