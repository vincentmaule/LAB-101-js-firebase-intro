/* global firebase addWoofRow updateWoofRow deleteWoofRow */

// NOTE:
//   Ignore the comments with "eslint" -- those comments are telling
//   the linter it can safely hide the errors on those lines.

// Sign into Firestore
const firebaseConfig = {
  apiKey: 'AIzaSyC9rsXkDh66SKxqfQ0PJqY4_P3ch_4cY88',
  authDomain: 'woof-7a7f3.firebaseapp.com',
  projectId: 'woof-7a7f3',
  storageBucket: 'woof-7a7f3.appspot.com',
  messagingSenderId: '170200282147',
  appId: '1:170200282147:web:e8a5616647bade565dad96',
  measurementId: 'G-VWGXQZSGDE'
}

const woofcol = 'woof'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

// CREATE a new woof in the database
// Function at Line 32
function createWoofInDatabase (woof) { // eslint-disable-line no-unused-vars
  // TODO create a new document in the collection
  db.collection(woofcol).add({
    created_at: woof.created_at,
    text: woof.text
  })
}

// READ from Firestore when woofs are added, modified, or removed
// Call one of the following functions for each changed document:
//  1. addWoofRow(<woofKey>, <woof>)
//  2. updateWoofRow(<woofKey>, <woof>)
//  3. deleteWoofRow(<woofKey>)
// Make sure to pass the correct parameters!
function readWoofsInDatabase () {
  // TODO read added, modified, and removed documents
}

// UPDATE the woof in the database
// Function at Line 57
function updateWoofInDatabase (woofKey, woofText) { // eslint-disable-line no-unused-vars
// TODO update the document in the collection
  db.collection(woofcol).set({
    created_at: woofKey,
    text: woofText
  })
}

// DELETE the woof from the database
// Function at Line 90
function deleteWoofFromDatabase (woofKey) { // eslint-disable-line no-unused-vars
  // TODO delete the document from the collection
  db.collection(woofcol).doc(woofKey).delete()
}
// Load all of the data
readWoofsInDatabase()
