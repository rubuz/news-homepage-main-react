import React from "react";
import Card from "./Card";
import { cardsData } from "../Data/cardData";

const Cards = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 grid sm:grid-cols-3 gap-8">
      {cardsData.map((item, index) => (
        <Card
          key={index}
          cardNumber={item.number}
          cardTitle={item.title}
          cardText={item.text}
          cardImage={item.img}
          cardDescription={item.altImg}
        />
      ))}
    </div>
  );
};

export default Cards;
