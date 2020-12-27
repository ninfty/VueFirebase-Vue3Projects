import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGCS6QmQi3Tfb851yUF_P7zRgnTwhXtxI",
    authDomain: "music-playlists-9264f.firebaseapp.com",
    projectId: "music-playlists-9264f",
    storageBucket: "music-playlists-9264f.appspot.com",
    messagingSenderId: "362736936411",
    appId: "1:362736936411:web:91dbeae0d76f946e0df3fe"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }