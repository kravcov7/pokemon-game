import cn from "classnames";

import f from "./styles.module.css";
import cardBackSide from "./assets/card-back-side.jpg";

const PokemonCard = ({ name, img, id, type, values, choice, active }) => {
  
  const handleClick = () => {
    
    console.log(id);
    choice && choice(id);
  };

  return (
    <div className={f.root} >
      <div className={cn(f.pokemonCard, { [f.active]: active })} onClick={() => handleClick(id)} >
        <div className={f.cardFront}>
          <div className={`${f.wrap} ${f.front}`}>
            <div className={`${f.pokemon} ${f[type]}`}>
              <div className={f.values}>
                <div className={`${f.count} ${f.top}`}>{values.top}</div>
                <div className={`${f.count} ${f.right}`}>{values.right}</div>
                <div className={`${f.count} ${f.bottom}`}>{values.bottom}</div>
                <div className={`${f.count} ${f.left}`}>{values.left}</div>
              </div>
              <div className={f.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={f.info}>
                <span className={f.number}>#{id}</span>
                <h3 className={f.name}>{name}</h3>
                <small className={f.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={f.cardBack}>
          <div className={`${f.wrap} ${f.back}`}>
            <img src={cardBackSide} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
