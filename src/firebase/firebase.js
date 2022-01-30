import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
import "firebase/messaging";
import "firebase/storage"

const firebaseConfig = {
	apiKey: "AIzaSyDBAA9fds7TLHmYzYGsd1FxdO9_0adAdnA",
  authDomain: "walfchat.firebaseapp.com",
  databaseURL: "https://walfchat-default-rtdb.firebaseio.com",
  projectId: "walfchat",
  storageBucket: "walfchat.appspot.com",
  messagingSenderId: "840763157061",
  appId: "1:840763157061:web:ebfcb5307fe2794e05512c",
  measurementId: "G-NR6C5HBKPW"
};/*use your own configuration*/

const firebaseApp = firebase.initializeApp(firebaseConfig);

const enablePersistence = firebaseApp.firestore().enablePersistence();
const db = firebaseApp.firestore();
const db2 = firebaseApp.database();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
var provider2 = new firebase.auth.FacebookAuthProvider();
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const createTimestamp2 = firebase.database.ServerValue.TIMESTAMP;
const messaging = "serviceWorker" in navigator && "PushManager" in window ?  firebase.messaging() : null;
const fieldIncrement = firebase.firestore.FieldValue.increment;
const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const videoStorage = firebase.storage().ref("videos");
const documentStorage = firebase.storage().ref("documents");

//set firebase loaded to "true" in app.js
async function loadFirebase(setFirebaseLoaded) {
	await enablePersistence;
	await db;
	setFirebaseLoaded(true);
}
//db.disableNetwork();

export {loadFirebase, auth , provider, provider2, createTimestamp, messaging, fieldIncrement, arrayUnion, storage, audioStorage, videoStorage, documentStorage, db2, createTimestamp2};
export default db;
