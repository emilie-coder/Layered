import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// ^ we are using compat notation here as the new firebase 9 api is a mess and i kinda hate it

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey: 'AIzaSyC6HgZq78EPcqfwROC-x21r-pBCrNSzqG4',
  authDomain: 'layered-5fb29.firebaseapp.com',
  databaseURL: 'https://layered-5fb29-default-rtdb.firebaseio.com',
  projectId: 'layered-5fb29',
  storageBucket: 'layered-5fb29.appspot.com',
  messagingSenderId: '156993383372',
  appId: '1:156993383372:web:d4b1c8e472cdfa8cb64b69',
  measurementId: 'G-L4CRY7HJP0',
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();
const noteHashMap = database.ref('Notes');
const maxZ = database.ref('maxIndex');

// fetch
export function fetchNotes(callback) {
  noteHashMap.on('value', (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export function fetchZ(callback) {
  maxZ.on('value', (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

// update
export function updateNote(id, note) {
  noteHashMap.child(id).update(note);
}

export function updateZ(callback) {
  maxZ.set(callback);
}

// delete
export function deleteNote(id) {
  noteHashMap.child(id).remove();
}

// create note
export function createNote(note) {
  noteHashMap.push(note);
}
