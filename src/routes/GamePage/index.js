import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import database from "../../service/firebase";

import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import d from "./style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const onClickPokemonAdd = () => {
    const newPokemon = Object.entries(pokemons)[Math.floor(Math.random() * 5)][1];
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set(newPokemon, (error) => {
      if (error) {
        console.log("# App error", error);
      } else {
        console.log("# App handleAddNewPokemon Data saved successfully!");
        setPokemons((prevState) => {
          const result = { ...prevState, [newKey]: newPokemon };
          console.log("### App handleAddNewPokemon new pokemons", result);
          return result;
        });
      }
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
          <button onClick={onClickPokemonAdd}> Add new pokemon</button>
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
