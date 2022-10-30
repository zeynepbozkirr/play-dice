import React, { useState } from "react";
import pic1 from "../public/1.jpg";
import pic2 from "../public/2.jpg";
import pic3 from "../public/3.jpg";
import pic4 from "../public/4.jpg";
import pic5 from "../public/5.jpg";
import pic6 from "../public/6.jpg";

const Dice = () => {
  const pic = [
    {
      img: pic1,
      count: 1,
    },
    {
      img: pic2,
      count: 2,
    },
    {
      img: pic3,
      count: 3,
    },
    {
      img: pic4,
      count: 4,
    },
    {
      img: pic5,
      count: 5,
    },
    {
      img: pic6,
      count: 6,
    },
  ];
  const [randomPic, setRandomPic] = useState(null);

  const rand = () => {
    const rr = pic[Math.floor(Math.random() * pic.length)];
    console.log(rr);
    setRandomPic(rr);
  };

  return (
    <div>
      <button onClick={() => rand()}>tıkla</button>
      {randomPic ? <img src={randomPic.img.src} /> : null}
    </div>
  );
};

export default Dice;
