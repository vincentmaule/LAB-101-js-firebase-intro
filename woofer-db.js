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

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

// CREATE a new woof in the database
function createWoofInDatabase (woof) { // eslint-disable-line no-unused-vars
    // TODO create a new document in the collection

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
function updateWoofInDatabase (woofKey, woofText) { // eslint-disable-line no-unused-vars
    // TODO update the document in the collection
}
  
  // DELETE the woof from the database
function deleteWoofFromDatabase (woofKey) { // eslint-disable-line no-unused-vars
    // TODO delete the document from the collection
}
  
  // Load all of the data
readWoofsInDatabase()