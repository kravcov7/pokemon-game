import { useHistory } from "react-router-dom";
import { useState } from "react";

import POKEMONS from "../../assets/pokemon.json";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import d from "./style.module.css";

const GamePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  const pokemons_default = POKEMONS.map((item) => {
    item['active'] = false;
    return item;
});

const [pokemons, setPokemons] = useState(pokemons_default)
  const choiceCard = (id) => {
    setPokemons(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))    
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
          {pokemons.map((item) => (
            <PokemonCard key={item.id} name={item.name} type={item.type} values={item.values} img={item.img} id={item.id} choice={choiceCard} active={item.active} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
