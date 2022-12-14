import React, { useState } from "react";
import Dicee from "react-dice-roll";
import styles from "./dice.module.css";

const Dice = () => {
  const [randomPic, setRandomPic] = useState(6);
  const [randomPic2, setRandomPic2] = useState(6);

  return (
    <div className={styles.diceContainer}>
      <div className={styles.diceAll}>
        <div className={styles.diceItem}>
          <Dicee
            size={150}
            rollingTime={2000}
            onRoll={(value) => setRandomPic(value)}
          />
        </div>

        <Dicee
          size={150}
          rollingTime={2000}
          onRoll={(value) => setRandomPic2(value)}
        />
      </div>
      <br />
      <br />
      <div>
        FIRST DICE: <b> {randomPic}</b>
        <br />
        SECOND DICE: <b> {randomPic2}</b>
      </div>
    </div>
  );
};

export default Dice;
