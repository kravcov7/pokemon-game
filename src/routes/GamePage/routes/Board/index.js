import s from "./style.module.css";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import PlayerBoard from "./component/PlayerBoard";

const counterWin = (board, player1, player2) => {
  let player1Count = player1.length;
  let player2Count = player2.length;

  board.forEach((item) => {
    if (item.card.posession === "red") {
      player2Count++;
      console.log("player2Count", player2Count);
    }

    if (item.card.posession === "blue") {
      player1Count++;
      console.log("player1Count", player1Count);
    }
  });

  return [player1Count, player2Count];
};

const BoardPage = () => {
  const { pokemons } = useContext(PokemonContext);
  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState(() => {
    return Object.values(pokemons).map((item) => ({
      ...item,
      posession: "blue",
    }));
  });
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiceCard] = useState(null);
  const [steps, setSteps] = useState(0);
  const history = useHistory();
  // console.log("### player222", player2);

  useEffect(async () => {
    const boardResponce = await fetch("https://reactmarathon-api.netlify.app/api/board");
    const boardRequest = await boardResponce.json();

    setBoard(boardRequest.data);

    const player2Responce = await fetch("https://reactmarathon-api.netlify.app/api/create-player");
    const player2Request = await player2Responce.json();

    setPlayer2(() => {
      return player2Request.data.map((item) => ({
        ...item,
        posession: "red",
      }));
    });
  }, []);

  if (Object.keys(pokemons).length === 0) {
    history.replace("/game");
  }

  const handleClickBoardPlate = async (position) => {
    // console.log("### position", position);
    // console.log("### choiceCard", choiceCard);
    if (choiceCard) {
      const params = {
        position,
        card: choiceCard,
        board,
      };

      const res = await fetch("https://reactmarathon-api.netlify.app/api/players-turn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      const request = await res.json();

      if (choiceCard.player === 1) {
        setPlayer1((prevState) => prevState.filter((item) => item.id !== choiceCard.id));
      }

      if (choiceCard.player === 2) {
        setPlayer2((prevState) => prevState.filter((item) => item.id !== choiceCard.id));
      }

      setBoard(request.data);
      setSteps((prevState) => {
        const count = prevState + 1;
        return count;
      });
    }
  };

  useEffect(() => {
    if (steps === 9) {
      const [count1, count2] = counterWin(board, player1, player2);
      console.log("count1", count1);
      console.log("count2", count2);

      if (count1 > count2) {
        alert("WIN");
      } else if (count1 < count2) {
        alert("LOSE");
      } else {
        alert("DRAW");
      }
    }
  }, [steps]);

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        <PlayerBoard player={1} cards={player1} onClickCard={(card) => setChoiceCard(card)} />
      </div>
      <div className={s.board}>
        {board.map((item) => (
          <div key={item.position} className={s.boardPlate} onClick={() => !item.card && handleClickBoardPlate(item.position)}>
            {item.card && <PokemonCard {...item.card} isActive minimaze />}
          </div>
        ))}
      </div>
      <div className={s.playerTwo}>
        <PlayerBoard player={2} cards={player2} onClickCard={(card) => setChoiceCard(card)} />
      </div>
    </div>
  );
};

export default BoardPage;
