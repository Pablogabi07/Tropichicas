import React from "react";
import logo from "../assets/logo.png"; // subí el logo a /public o /src/assets

const Header = () => (
  <header>
    <img src={logo} alt="Tropichicas Logo" className="logo" />
    <h1>Tropichicas</h1>
    <p>Tragos tropicales en tu puerta</p>
    <a
      href="https://wa.me/5491134264038"
      className="btn-wsp"
      target="_blank"
      rel="noopener noreferrer"
    >
      Hacé tu pedido
    </a>
  </header>
);

export default Header;
