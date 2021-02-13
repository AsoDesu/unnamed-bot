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
    apiKey: "AIzaSyAlKBvQGu_xjSrtC008kXPrzuV1ZHrexfQ",
    authDomain: "unnamed-events.firebaseapp.com",
    projectId: "unnamed-events",
    storageBucket: "unnamed-events.appspot.com",
    messagingSenderId: "206688900318",
    appId: "1:206688900318:web:bd17d56c34ccdf6efb1e4f"
}

if (process.env.DEV == '1') {
    firebase.initializeApp(firebaseConfigDev);
} else {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().signInWithEmailAndPassword('unnamed@asodev.net', process.env.PASSWORD)