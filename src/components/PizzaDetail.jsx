import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../PizzaContext";
import { Link } from "react-router-dom";
import "../assets/style/details.css";

export default function PizzaDetail() {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);

  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    alert("¡Pizza agregada al carrito!");
  };

  return (
    <div class="descripcion">
      <div class="detalle">
        <h2 class="namedesc">{pizza.name}</h2>
        <div class="imagen">
          <img src={pizza.img} alt={pizza.name} />
        </div>
          <p>{pizza.desc}</p>
          <p>Precio: ${pizza.price}</p>
          <div class="accion">
          <button class="mas" onClick={() => handleAddToCart(pizza)}>Agregar al carrito</button>
          <Link to="/">Inicio</Link>
          </div>
      </div>
    </div>
  );
}
