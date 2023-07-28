import React from "react";

const Card = ({
  cardNumber,
  cardTitle,
  cardText,
  cardImage,
  cardDescription,
}) => {
  return (
    <div className="grid grid-cols-[30%_1fr] gap-4">
      {/* IMG container */}
      <div>
        <img src={cardImage} alt={cardDescription} />
      </div>
      {/* Text container */}
      <div className="flex flex-col justify-between">
        <p className="text-grayish-blue text-3xl font-bold">{cardNumber}</p>
        <h2 className="text-very-dark-blue font-bold text-lg hover:text-primary-orange duration-200 cursor-pointer">
          {cardTitle}
        </h2>
        <p className="text-dark-grayish-blue">{cardText}</p>
      </div>
    </div>
  );
};

export default Card;
