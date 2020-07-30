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
    {id: 2, name:"Pepperoni", image: "pepperoni-pizza.png", description: "Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.", price: 7},
  ]);
  return (
    <div className="App">
      <header>
        lol
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Alfredo's Pizza Cafe</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/cart"><CartButton></CartButton></Link></li>
            </ul>
          </nav>

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
