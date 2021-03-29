import { useState } from "react";
import PokemonCard from "../../../../../../components/PokemonCard";
import cn from "classnames";

import s from "./style.module.css";

const PlayerBoard = ({ onClickCard, cards, player }) => {
  const [isSelected, setSelected] = useState(null);
  return (
    <>
      {cards.map((item) => (
        <div
          className={cn(s.cardBoard, {
            [s.selected]: isSelected === item.id,
          })}
          onClick={() => {
            setSelected(item.id);
            onClickCard && onClickCard({
              player,
              ...item,
            });
          }}
        >
          <PokemonCard key={item.id} name={item.name} type={item.type} values={item.values} img={item.img} id={item.id} minimize isActive />
        </div>
      ))}
    </>
  );
};

export default PlayerBoard;
