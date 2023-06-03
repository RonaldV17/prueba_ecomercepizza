import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../PizzaContext";
import "../assets/style/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, calculateTotal } =
    useContext(PizzaContext);

  const getPizzaQuantity = (pizzaId) => {
    const pizzasWithQuantity = cartItems.reduce((acc, item) => {
      if (item.id === pizzaId) {
        acc[item.id] = (acc[item.id] || 0) + 1;
      }
      return acc;
    }, {});

    return pizzasWithQuantity[pizzaId] || 0;
  };

  const getPizzaTotalPrice = (pizzaId) => {
    const quantity = getPizzaQuantity(pizzaId);
    const pizza = cartItems.find((item) => item.id === pizzaId);
    return quantity * pizza.price;
  };

  const handlePayment = () => {
    alert("Pago realizado con éxito");
    clearCart();
  };

  return (
    <div class="carritos">
      <h2 class="titulocarro">Carrito de Compras</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>No tienes ítems en el carrito</p>
        ) : (
          <div>
            {Array.from(new Set(cartItems.map((item) => item.id))).map(
              (pizzaId) => {
                const pizza = cartItems.find((item) => item.id === pizzaId);
                const quantity = getPizzaQuantity(pizzaId);
                const totalPrice = getPizzaTotalPrice(pizzaId);

                return (
                  <div class="total" key={pizzaId}>
                    <div clas="datos">
                     <h3>{pizza.name}</h3> 
                     <img  class="foto" src={pizza.img} alt={pizza.name} />
                    </div>
                    <div class="cantidad">
                      <p>Cantidad: {quantity}</p>                   
                      <p>Precio total: ${totalPrice}</p>
                    </div>
                    <div class="eliminar">
                    <button onClick={() => removeFromCart(pizzaId)}>
                      Remover del carrito
                    </button>
                    </div>
                  </div>
                );
              }
            )}
            <p class="pagar">Total a pagar: ${calculateTotal()}</p>
            <div class="medidas">
            <button class="vaciar" onClick={clearCart}>Vaciar carrito</button>
            <button class="finalizar" onClick={handlePayment}>Pagar</button>
            <Link to="/">Seguir comprando</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
