import React, { useState } from "react";
import Dicee from "react-dice-roll";
import styles from "./dice.module.css";

const Dice = () => {
  const [randomPic, setRandomPic] = useState(null);
  const [randomPic2, setRandomPic2] = useState(null);

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
        first dice: {randomPic}
        <br />
        second dice: {randomPic2}
      </div>
    </div>
  );
};

export default Dice;
