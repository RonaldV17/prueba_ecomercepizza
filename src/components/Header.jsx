import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../PizzaContext";

import '../assets/style/Header.css';

export default function Header() {
  const { shopCartTotal, calculateTotal } = useContext(PizzaContext);

  return (
    <div className="container">
      <div className="navbar">
        <div className="inicio">
          <NavLink
            to="/"
            style={{ fontSize: "2vw" }}
            className={({ isActive }) =>
              isActive ? "active-class" : ""
            }
          >
            🍕<strong>Pizzería Mamma Mía!</strong>
          </NavLink>
        </div>

        <div className="compra">
          <NavLink
            to="/carrito"
            style={{ fontSize: "2vw" }}
            className={({ isActive }) =>
              isActive ? "active-class" : ""
            }
          >
            🛒 ${calculateTotal()}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

