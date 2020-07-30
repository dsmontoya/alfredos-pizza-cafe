import React, { useState } from 'react';
import CartButton from './cart/CartButton';
import Cart from './cart/Cart';
import History from './history/History';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./home/Home.js";

function App() {
  const [products, setProducts] = useState([
    {id: 1, name:"Summer", image: "summer-pizza.png", description: "Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli", price: 10},
    {id: 2, name:"Pepperoni", image: "pepperoni-pizza.png", description: "Olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.", price: 7},
  ]);
  return (
    <div className="App">
      <Router>
        <header className="Header col-12">
          <div className=" Header-title col-3">
            <Link to="/">
              <h1>Alfredo's Pizza Cafe</h1>
            </Link>
          </div>
          <div className="col-7"></div>
          <nav className="col-2">
            <ul>
              <li className="Header-item Header-history col-7"><Link to="/history">History</Link></li>
              <li className="Header-item Header-cart col-5"><Link to="/cart"><CartButton></CartButton></Link></li>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/">
              <Home products={products} />
            </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
