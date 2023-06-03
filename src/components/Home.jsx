import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../PizzaContext";
import { Card } from "react-bootstrap";
import "../assets/style/Home.css";

export default function Home() {
  const { pizzas, addToCart } = useContext(PizzaContext);

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    alert("Pizza agregada al carrito con éxito.");
  };

  return (
    <div class="contenido">
      <h2>Catálogo de Pizzas</h2>
      <div className="catalogo">
        {pizzas.map((pizza) => (
          <div key={pizza.id}>
            <Card className="listado">
              <Card.Img src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <h5>Ingredientes</h5>
                <ul>
                  {pizza.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <p>Precio: ${pizza.price}</p>
                <button className="details-button" onClick={() => handleAddToCart(pizza)}>
                  Agregar
                </button>
                <button className="details-button">
                  <Link to={`/pizza/${pizza.id}`}>Ver detalles</Link>
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
