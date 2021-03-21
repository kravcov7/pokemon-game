import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import firebase from 'firebase';
import cn from 'classnames';

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import ContactPage from "./routes/ContactPage";
import AboutPage from "./routes/AboutPage";
import NotFound from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from './style.module.css';

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

const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
  console.log('###: snapshot: ', snapshot.val());
})

const App = () => {
  const match = useRouteMatch("/");
  
  return (
    <Switch>
      <Route path='/404' component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/welcome" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/contact" component={ContactPage} />              
              <Route path="/about" component={AboutPage} />
              <Route render={() => (
                <Redirect to='/404' />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
  // switch (page) {
  //   case 'app':
  //     return <HomePage onChangePage={handleChangePage} />
  //   case 'game':
  //     return <GamePage onChangePage={handleChangePage} />
  //   default:
  //     return <HomePage onChangePage={handleChangePage}  />
  // }
};

export default App;
