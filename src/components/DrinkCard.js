import React from "react";

const DrinkCard = ({ name, price, image, emoji, addToCart }) => {
  const message = `Hola Tropichicas! Quiero pedir un ${name}`;
  const wspLink = `https://wa.me/5491134264038?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="drink-card">
      {image ? (
        <img src={image} alt={name} className="drink-photo" />
      ) : (
        <span className="emoji">{emoji}</span>
      )}
      <p>{name}</p>
      <p className="price">💲{price}</p>

      <button
        className="btn-add"
        onClick={() => addToCart({ name, price, image, emoji })}
      >
        Agregar
      </button>
    </div>
  );
};

export default DrinkCard;
