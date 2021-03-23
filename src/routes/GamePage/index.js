import { useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import database from "../../service/firebase";

import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import d from "./style.module.css";
import { FireBaseContext } from "../../context/firebaseContext";

const GamePage = () => {
  const firebase = useContext(FireBaseContext);
  const [pokemons, setPokemons] = useState({});
  console.log('### firebase', firebase);

  const getPokemons = async () => {
    const responce = await firebase.getPokemonsOnce();
    console.log('### responce', responce);
    setPokemons(responce);
    // database.ref("pokemons").once("value", (snapshot) => {
    //   setPokemons(snapshot.val());
    // });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const onAddPokemon = () => {
    const newPokemon = Object.entries(pokemons)[Math.floor(Math.random() * 5)][1];
    firebase.addPokemon(newPokemon, () => {
      getPokemons();
    })
  };

  const onClickCardTurn = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
        // database.ref("pokemons/" + item[0]).set(pokemon);
        acc[item[0]] = pokemon;
        firebase.postPokemon(item[0], pokemon);

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
          {/* <Link to='/'>Home pagee</Link> */}
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
          <button onClick={onAddPokemon}> Add new pokemon</button>
        </div>
      </Layout>
    </>
  );
};

export default GamePage;