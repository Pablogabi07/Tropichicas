import React, { useState } from "react";

const Cart = ({ cart, removeFromCart }) => {
  const [open, setOpen] = useState(false);

  if (cart.length === 0) return null;

  const total = cart.reduce((acc, d) => acc + d.qty * d.price, 0);

  const message =
    "Hola Tropichicas! Quiero pedir:\n" +
    cart.map((d) => `${d.qty} ${d.name} ${d.emoji}`).join(", ") +
    `\n\nTotal: $${total}`;

  const wspLink = `https://wa.me/5491134264038?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={`cart-floating ${open ? "open" : ""}`}>
      <button className="cart-toggle" onClick={() => setOpen(!open)}>
        🛒 {cart.reduce((acc, d) => acc + d.qty, 0)}
      </button>

      {open && (
        <div className="cart-content">
          <div className="cart-header">
            <h3>Tu pedido</h3>
            <button className="cart-close" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>
          <ul>
            {cart.map((d) => (
              <li key={d.name}>
                {d.qty} × {d.name} {d.emoji} — ${d.qty * d.price}
                <button onClick={() => removeFromCart(d.name)}>❌</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${total}</p>
          <a
            href={wspLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wsp"
          >
            Enviar pedido por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
