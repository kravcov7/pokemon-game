import s from "./style.module.css";
import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { useHistory } from 'react-router-dom';
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const { pokemons } = useContext(PokemonContext);
  const history = useHistory();
  console.log('### board', player2);

  useEffect(async () => {
    const boardResponce = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardRequest = await boardResponce.json();

    setBoard(boardRequest.data);

    const player2Responce = await fetch('https://reactmarathon-api.netlify.app/api/create-player');   
    const player2Request = await player2Responce.json(); 

    setPlayer2(player2Request.data);
  }, [])

  // if(Object.keys(pokemons).length === 0) {
  //   history.replace('/game');
  // }

  const handleClickBoardPlate = (position) => {
    console.log('### position', position);
  }


  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(pokemons).map(({ id, name, type, values, img }) => (
          <PokemonCard className={s.card} key={id} name={name} type={type} values={values} img={img} id={id} minimize isActive />
        ))}
      </div>
      <div className={s.board}>
        {
          board.map(item => (
          <div key={item.position} className={s.boardPlate} onClick={() => !item.card && handleClickBoardPlate(item.position)} >
            {
              item.card && <PokemonCard {...item} monomaze />
            }

          </div>))
        }
        
      </div>
      <div className={s.playerTwo}>
        {
          player2.map(({ id, name, type, values, img }) => (
            <PokemonCard className={s.card} key={id} name={name} type={type} values={values} img={img} id={id} minimize isActive />
          ))
        }

      </div>
    </div>
  );
};

export default BoardPage;
