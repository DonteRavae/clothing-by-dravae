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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
}

export const convertCatalogSnapshotToMap = catalog => {
  const transformedCatalog = catalog.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCatalog.reduce((acc, catalog) => {
    acc[catalog.title.toLowerCase()] = catalog;
    return acc;
  }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;