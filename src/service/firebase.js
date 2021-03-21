import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDH0GJm9dZp3-Dm4LRICXDhFv08Uwix35Q",
  authDomain: "pokemon-game-c81d3.firebaseapp.com",
  databaseURL: "https://pokemon-game-c81d3-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-c81d3",
  storageBucket: "pokemon-game-c81d3.appspot.com",
  messagingSenderId: "72167280188",
  appId: "1:72167280188:web:a19c1d76bd5f12385fbd39"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;
