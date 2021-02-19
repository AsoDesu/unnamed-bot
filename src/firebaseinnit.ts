import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAlKBvQGu_xjSrtC008kXPrzuV1ZHrexfQ",
    authDomain: "unnamed-events.firebaseapp.com",
    projectId: "unnamed-events",
    storageBucket: "unnamed-events.appspot.com",
    messagingSenderId: "206688900318",
    appId: "1:206688900318:web:bd17d56c34ccdf6efb1e4f"
} 

var firebaseConfigDev = {
    apiKey: "AIzaSyA14FPA54Joh7DLD5IzP-otqzHPV9Arxqo",
    authDomain: "no-clan-dev.firebaseapp.com",
    databaseURL: "https://no-clan-dev.firebaseio.com",
    projectId: "no-clan-dev",
    storageBucket: "no-clan-dev.appspot.com",
    messagingSenderId: "672258843290",
    appId: "1:672258843290:web:d83ecf59b5203dd28ab523",
    measurementId: "G-H09GE0E4M4"
}

if (process.env.DEV == '1') {
    firebase.initializeApp(firebaseConfigDev);
} else {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().signInWithEmailAndPassword('unnamed@asodev.net', process.env.PASSWORD)