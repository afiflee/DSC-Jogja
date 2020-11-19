
import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUs2q0xRxHY4jcIXmIXnXSTtrz_fpGVOU",
  authDomain: "dscjogfest.firebaseapp.com",
  databaseURL: "https://dscjogfest.firebaseio.com",
  projectId: "dscjogfest",
  storageBucket: "dscjogfest.appspot.com",
  messagingSenderId: "701163775030",
  appId: "1:701163775030:web:31de43af07fb98a4d86497",
  measurementId: "G-ZCNCJMNBKM"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  firebase:firebase
};