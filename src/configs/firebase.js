import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({










  
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
