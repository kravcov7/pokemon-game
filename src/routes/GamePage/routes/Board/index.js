import s from "./style.module.css";
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";

const BoardPage = () => {
  const { pokemons } = useContext(PokemonContext);
  const history = useHistory();

  if(Object.keys(pokemons).length === 0) {
    history.replace('/game');
  }


  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(pokemons).map(({ id, name, type, values, img }) => (
          <PokemonCard className={s.card} key={id} name={name} type={type} values={values} img={img} id={id} minimize isActive />
        ))}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
