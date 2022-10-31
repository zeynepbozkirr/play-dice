import React, { useEffect, useState } from "react";
import pic1 from "../public/1.jpg";
import pic2 from "../public/2.jpg";
import pic3 from "../public/3.jpg";
import pic4 from "../public/4.jpg";
import pic5 from "../public/5.jpg";
import pic6 from "../public/6.jpg";
import ReactDice from "react-dice-roller";
import Dicee from "react-dice-roll";
import styles from "./dice.module.css";

const Dice = () => {
  const [randomPic, setRandomPic] = useState(null);
  const [randomPic2, setRandomPic2] = useState(null);

  return (
    <div className={styles.diceContainer}>
      <div className={styles.dice}>
        <Dicee
          size={150}
          rollingTime={3000}
          onRoll={(value) => setRandomPic(value)}
        />

        <Dicee size={150} onRoll={(value) => setRandomPic2(value)} />
      </div>
      <div>
        dice first : {randomPic}
        dice second: {randomPic2}
      </div>
    </div>
  );
};

export default Dice;
