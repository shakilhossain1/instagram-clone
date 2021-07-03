import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCKdHvsuHR4--iYhu6hYh91jZq9T_VQIRo',
  authDomain: 'instagram-clone-b8a54.firebaseapp.com',
  projectId: 'instagram-clone-b8a54',
  storageBucket: 'instagram-clone-b8a54.appspot.com',
  messagingSenderId: '344331457322',
  appId: '1:344331457322:web:459b80e06c4a03b718c453',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
