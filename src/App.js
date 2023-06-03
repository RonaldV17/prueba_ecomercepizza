import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PizzaContextProvider from "./PizzaContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Banner from "./components/Banner";
import PizzaDetail from "./components/PizzaDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <PizzaContextProvider>
        <div className="App">
          <Header />
          <Banner/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetail />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </div>
      </PizzaContextProvider>
    </Router>
  );
}

export default App;
