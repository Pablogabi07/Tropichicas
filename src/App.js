import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DrinkList from "./components/DrinkList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./index.css";

// Importamos Analytics de Vercel
import { Analytics } from "@vercel/analytics/react";

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
      <Header />
      <DrinkList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Footer />
      {/* Activamos métricas de Vercel */}
      <Analytics />
    </>
  );
}

export default App;

