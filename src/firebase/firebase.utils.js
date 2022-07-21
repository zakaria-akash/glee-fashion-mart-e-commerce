import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7vdPKWVOulSma__e5HH8okpm85AtJ8kE",
  authDomain: "glee-fashion-mart-db.firebaseapp.com",
  databaseURL: "https://glee-fashion-mart-db-default-rtdb.firebaseio.com/",
  projectId: "glee-fashion-mart-db",
  storageBucket: "glee-fashion-mart-db.appspot.com",
  messagingSenderId: "793180273004",
  appId: "1:793180273004:web:76737d882e473f52d39b49",
  measurementId: "G-46ZFZ9DFRG",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
//databaseURL: 'https://glee-fashion-mart-db-default-rtdb.firebaseio.com/'
