import { useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import PokemonCard from "../../../../components/PokemonCard";
import Layout from "../../../../components/Layout";

import d from "./style.module.css";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext);
  
  const [pokemons, setPokemons] = useState({});
  
  // const getPokemons = async () => {
  //   const responce = await firebase.getPokemonsOnce();    
  //   setPokemons(responce);    
  // };

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, []);

  // const onAddPokemon = () => {
  //   const newPokemon = Object.entries(pokemons)[Math.floor(Math.random() * 5)][1];
  //   firebase.addPokemon(newPokemon, () => {
  //     getPokemons();
  //   })
  // };

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonsContext.onSelectedPokemons(key, pokemon);
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  const handlerStartGameClick = () => {
    history.push("/game/board");
  };

  const history = useHistory();
  // const handleClick = () => {
  //   history.push("/");
  // };

  return (
    <>
      <Layout colorBg="#181d23">
        <div className={d.button}>
          <button onClick={handlerStartGameClick} disabled={Object.keys(pokemonsContext.pokemons).length < 5}>
            {" "}
            Start Game
          </button>
        </div>
        <div className={d.flex}>
          {Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={d.card}
              key={key}
              name={name}
              type={type}
              isSelected={selected}
              values={values}
              img={img}
              id={id}
              isActive={true}
              onClickCardTurn={() => {
                if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                  handleChangeSelected(key);
                }
              }}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default StartPage;
