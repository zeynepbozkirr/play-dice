import React, { useEffect, useState } from "react";
import pic1 from "../public/1.jpg";
import pic2 from "../public/2.jpg";
import pic3 from "../public/3.jpg";
import pic4 from "../public/4.jpg";
import pic5 from "../public/5.jpg";
import pic6 from "../public/6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, useTransition, animated } from "react-spring";

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
  const [randomPic, setRandomPic] = useState({
    img: pic1,
    count: 1,
  });
  const [randomPic2, setRandomPic2] = useState({
    img: pic1,
    count: 1,
  });
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState(1);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(items);
      }, 2000);
    }
  }, [items]);

  const randFunc = () => {
    const random = pic[Math.floor(Math.random() * pic.length)];
    const random2 = pic[Math.floor(Math.random() * pic.length)];
    setRandomPic(random);
    setRandomPic2(random2);
  };

  return (
    <div>
      <button onClick={() => randFunc()}>CLICK</button>
      <div>
        <img src={randomPic.img.src} /> <img src={randomPic2.img.src} />{" "}
      </div>
      <div>
        first dice:{randomPic.count} <br />
        second dice:{randomPic2.count}
      </div>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {item.fig}
        </animated.div>
      ))}
    </div>
  );
};

export default Dice;
