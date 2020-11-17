
import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeyI-97QSQSdO7eeDaJOuQh5GEou7I_Ds",
  authDomain: "dsc-jogja-festival-eb14c.firebaseapp.com",
  databaseURL: "https://dsc-jogja-festival-eb14c.firebaseio.com",
  projectId: "dsc-jogja-festival-eb14c",
  storageBucket: "dsc-jogja-festival-eb14c.appspot.com",
  messagingSenderId: "845744627571",
  appId: "1:845744627571:web:4571d2f19070b0050cef06"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  firebase:firebase
};