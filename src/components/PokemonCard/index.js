import React from "react";
import f from "./styles.module.css";
import cardBackSide from './assets/card-back-side.jpg'

function PokemonCard() {
  return (
    <div className={f.root}>
      <div className={f.pokemonCard}>
        <div className={f.cardFront}>
          <div className={`${f.wrap} ${f.front}`}>
            <div className={f.pokemon}>
              <div className={f.values}>
                <div className={`${f.count} ${f.top}`}></div>
                <div className={`${f.count} ${f.right}`}></div>
                <div className={`${f.count} ${f.bottom}`}></div>
                <div className={`${f.count} ${f.left}`}></div>
              </div>
              <div className={f.imgContainer}>
                <img src="<-- Pokemon Picture -->" alt="<-- Name Pokemon -->" />
              </div>
              <div className={f.info}>
                <span className={f.number}>#{}</span>
                <h3 className={f.name}></h3>
                <small className={f.type}>
                  Type: <span></span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={f.cardBack}>
          <div className={`${f.wrap} ${f.back}`}>
            <img src={f.cardBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
