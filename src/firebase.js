import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDTL9dve7rkEaCsryBsss3g92akZYb1KyM',
  authDomain: 'messenger-clone-746fa.firebaseapp.com',
  databaseURL: 'https://messenger-clone-746fa.firebaseio.com',
  projectId: 'messenger-clone-746fa',
  storageBucket: 'messenger-clone-746fa.appspot.com',
  messagingSenderId: '642869073604',
  appId: '1:642869073604:web:576868cc03eae3e3761b91',
  measurementId: 'G-JJ6Q03DJCR',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
