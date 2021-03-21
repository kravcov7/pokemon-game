import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import database from "../../service/firebase";

import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import d from "./style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  const [cardsUpdated, setCardsUpdate] = useState(false);

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, [cardsUpdated]);

  const onClickPokemonAdd = () => {
    setCardsUpdate((prevState) => {
      let keys = Object.keys(pokemons);
      const newKey = database.ref().child("pokemons").push().key;
      database.ref("pokemons/" + newKey).set(pokemons[keys[keys.length-(Math.floor(Math.random()*(keys.length-1)) + 1)]]);

      return !prevState;
    });
  };

  const onClickCardTurn = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        const prevCardState = pokemon.active;

        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
        if (pokemon.active !== prevCardState) {
          database.ref("pokemons/" + item[0]).set(pokemon);
        }
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };

  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <header className={d.root}>
        <div className={d.forest}></div>
        <div className={d.container}>
          <h1>This Game Page!!!</h1>
          <button onClick={handleClick}>Home Page</button>
        </div>
      </header>
      <Layout colorBg="#181d23">
        <div className={d.flex}>
          {Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) => (
            <PokemonCard key={key} name={name} type={type} values={values} img={img} id={id} onClickCardTurn={onClickCardTurn} isActive={active} />
          ))}
        </div>
        <div className={d.button}>
          <button onClick={onClickPokemonAdd}> Add new pokemon</button>
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
