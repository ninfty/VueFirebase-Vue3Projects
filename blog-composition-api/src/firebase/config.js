import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgC3Jvgv1Kyk9_1SY_bbHaLPfIuzkBI3E",
    authDomain: "udemy-vue-firebase-4afed.firebaseapp.com",
    projectId: "udemy-vue-firebase-4afed",
    storageBucket: "udemy-vue-firebase-4afed.appspot.com",
    messagingSenderId: "967679652520",
    appId: "1:967679652520:web:320715de9da2c76602c89d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }