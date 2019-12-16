import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCpKF07a9LM70NWKmLjj54saMSXB_G8V0A",
  authDomain: "crwn-db-ee351.firebaseapp.com",
  databaseURL: "https://crwn-db-ee351.firebaseio.com",
  projectId: "crwn-db-ee351",
  storageBucket: "crwn-db-ee351.appspot.com",
  messagingSenderId: "643272912629",
  appId: "1:643272912629:web:7585b1ee14fc7f00429fbc",
  measurementId: "G-2PNCPE177E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  //console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
  // console.log(firestore.doc('users/1234fdfa')); - does not get from db always returns details
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // gets a document reference with unique random id
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); //if success will return void
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  //console.log(transformedCollection);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
