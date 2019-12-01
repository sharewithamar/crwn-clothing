import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCpKF07a9LM70NWKmLjj54saMSXB_G8V0A',
  authDomain: 'crwn-db-ee351.firebaseapp.com',
  databaseURL: 'https://crwn-db-ee351.firebaseio.com',
  projectId: 'crwn-db-ee351',
  storageBucket: 'crwn-db-ee351.appspot.com',
  messagingSenderId: '643272912629',
  appId: '1:643272912629:web:7585b1ee14fc7f00429fbc',
  measurementId: 'G-2PNCPE177E'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
