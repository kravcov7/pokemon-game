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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());    
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (newPokemon, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(newPokemon).then(() => cb());
  }
}

export default Firebase;
