import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DrinkList from "./components/DrinkList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("tropichicas-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tropichicas-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (drink) => {
    setCart((prev) => {
      const found = prev.find((d) => d.name === drink.name);
      if (found) {
        return prev.map((d) =>
          d.name === drink.name ? { ...d, qty: d.qty + 1 } : d
        );
      } else {
        return [...prev, { ...drink, qty: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((d) => d.name !== name));
  };

  return (
    <>
      {/* Fondo con hexágonos fluorescentes */}
      <div className="hexagon-bg">
        <div className="hexagon" style={{ left: "10%", animationDelay: "0s" }}></div>
        <div className="hexagon" style={{ left: "20%", animationDelay: "2s" }}></div>
        <div className="hexagon" style={{ left: "30%", animationDelay: "4s" }}></div>
        <div className="hexagon" style={{ left: "40%", animationDelay: "6s" }}></div>
        <div className="hexagon" style={{ left: "50%", animationDelay: "8s" }}></div>
        <div className="hexagon" style={{ left: "60%", animationDelay: "10s" }}></div>
        <div className="hexagon" style={{ left: "70%", animationDelay: "12s" }}></div>
        <div className="hexagon" style={{ left: "80%", animationDelay: "14s" }}></div>
      </div>

      <Header />
      <DrinkList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Footer />
    </>
  );
}

export default App;
