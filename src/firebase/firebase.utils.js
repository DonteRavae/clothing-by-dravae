import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAcUsPKOFot0ic7P4HVffjbJu0y-gfZav8",
  authDomain: "clothing-by-d-ravae.firebaseapp.com",
  databaseURL: "https://clothing-by-d-ravae.firebaseio.com",
  projectId: "clothing-by-d-ravae",
  storageBucket: "",
  messagingSenderId: "817007543397",
  appId: "1:817007543397:web:e62666d223020698"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;