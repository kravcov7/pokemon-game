import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useState } from "react";

import Start from "./routes/Start";
import Board from "./routes/Board";
import Finish from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];

        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };
  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={Start} />
        <Route path={`${match.path}/board`} component={Board} />
        <Route path={`${match.path}/finish`} component={Finish} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
