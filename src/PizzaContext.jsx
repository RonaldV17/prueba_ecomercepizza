import React, { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

export default function PizzaContextProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar los datos de las pizzas desde el archivo pizzas.json
    const fetchData = async () => {
      try {
        const response = await fetch("pizzas.json");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (pizza) => {
    setCartItems((prevItems) => [...prevItems, pizza]);
  };

  const removeFromCart = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== pizzaId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
}
