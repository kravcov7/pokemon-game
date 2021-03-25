import s from "./style.module.css";
import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { useHistory } from 'react-router-dom';
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import PlayerBoard from "./component/PlayerBoard";

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiceCard] = useState(null);
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
    console.log('### choiceCard', choiceCard);
  }


  return (
    <div className={s.root}>
      <div className={s.playerOne}>
      <PlayerBoard cards={ Object.values(pokemons)} onClickCard={(card) => setChoiceCard(card)} />
        
      </div>
      <div className={s.board}>
        {
          board.map(item => (
          <div key={item.position} className={s.boardPlate} onClick={() => !item.card && handleClickBoardPlate(item.position)} >
            {
              item.card && <PokemonCard {...item} minimaze />
            }

          </div>))
        }
        
      </div>
      <div className={s.playerTwo}>
        <PlayerBoard cards={player2} onClickCard={(card) => setChoiceCard(card)} />
      </div>
    </div>
  );
};

export default BoardPage;
