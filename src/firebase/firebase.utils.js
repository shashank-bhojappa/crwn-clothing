import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDoEfbwMtg7RwoWcwVD0PJ8thWsWobssWU",
    authDomain: "crwn-db-45318.firebaseapp.com",
    projectId: "crwn-db-45318",
    storageBucket: "crwn-db-45318.appspot.com",
    messagingSenderId: "455675193392",
    appId: "1:455675193392:web:569b04fd10cbed464565f5",
    measurementId: "G-9GMFZ2ZV62"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;