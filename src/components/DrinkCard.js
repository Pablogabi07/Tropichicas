import React from "react";

const DrinkCard = ({ name, emoji, price, addToCart }) => {
  const message = `Hola Tropichicas! Quiero pedir un ${name} ${emoji}`;
  const wspLink = `https://wa.me/5491134264038?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="drink-card">
      <span className="emoji">{emoji}</span>
      <p>{name}</p>
      <p className="price">💲{price}</p>

      <button
        className="btn-add"
        onClick={() => addToCart({ name, emoji, price })}
      >
        Agregar
      </button>
    </div>
  );
};

export default DrinkCard;
