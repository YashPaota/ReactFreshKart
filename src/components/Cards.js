import React from 'react';
import cardsStyles from "../styles/cards.module.css";
import mangoImg from "../images/Mango.png";
import vegImg from "../images/Veggies.png";
import bananaImg from "../images/Banana.png";

const Cards = () => {
  return (
    <div className={cardsStyles.cardsContainer}>
        <div className={` ${cardsStyles.card} ${cardsStyles.pink}`}>
            <div className={cardsStyles.caption}>
                Seasons's fresh & crispy , always!
            </div>
            <img src={mangoImg} alt="Mango" className={cardsStyles.mango} />
        </div>

        <div className={` ${cardsStyles.card} ${cardsStyles.orange}`}>
            <div className={cardsStyles.caption}>
                Your Daily dose of goodness
            </div>
            <img src={vegImg} alt="Oranges" className={cardsStyles.veg} />
        </div>

        <div className={` ${cardsStyles.card} ${cardsStyles.blue}`}>
            <div className={cardsStyles.caption}>
                Deals on bananas
            </div>
            <img src={bananaImg} alt="Banana" className={cardsStyles.banana} />
        </div>
    </div>
  )
}

export default Cards;