import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";

import cn from "classnames";

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import ContactPage from "./routes/ContactPage";
import AboutPage from "./routes/AboutPage";
import NotFound from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import { FireBaseContext } from "./context/firebaseContext";
import s from "./style.module.css";
import Firebase from "./service/firebase";

const App = () => {
  const match = useRouteMatch("/");

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/welcome" component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
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
