import React from "react";
import DrinkCard from "./DrinkCard";
import { drinks } from "../data/drinks";

const DrinkList = ({ addToCart }) => {
  const categories = [
    "Combos",
    "Clásicos",
    "Especiales",
    "De la Casa",
    "Promos",
  ];

  return (
    <section className="menu">
      <h2>Nuestra Carta</h2>

      {categories.map((cat) => (
        <div key={cat} className={cat === "Combos" ? "combo-section" : ""}>
          <h3>
            {cat} {cat === "Combos" && "🎉"}
          </h3>

          {/* 👇 Si es Combos, usamos carrusel */}
          {cat === "Combos" ? (
            <div className="combo-carousel">
              {drinks
                .filter((d) => d.category === cat)
                .map((d) => (
                  <DrinkCard
                    key={d.name}
                    name={d.name}
                    emoji={d.emoji}
                    price={d.price}
                    addToCart={addToCart}
                  />
                ))}
            </div>
          ) : (
            <div className="drink-grid">
              {drinks
                .filter((d) => d.category === cat)
                .map((d) => (
                  <DrinkCard
                    key={d.name}
                    name={d.name}
                    emoji={d.emoji}
                    price={d.price}
                    addToCart={addToCart}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default DrinkList;
