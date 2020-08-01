import React, { useState } from 'react';
import CartButton from './cart/CartButton';
import Cart from './cart/Cart';
import Thanks from './Thanks';
import History from './history/History';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./home/Home.js";

function App() {
  const [products, setProducts] = useState([
    {id: 1, name:"Summer", image: "summer-pizza.png", description: "Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli", price: 10},
    {id: 2, name:"Pepperoni", image: "pepperoni-pizza.png", description: "Olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.", price: 7},
  ]);

  const [cartHash, setCartHash] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);
  const cartProducts = hashToArray();
  const [success, setSuccess] = useState(false);

  function handleAddToCart(product) {
    const p = Object.assign({}, product);
    let products = Object.assign({}, cartHash);
    if (!(p.id in products)) {
      p.amount = 1;
      products[p.id] = p
    } else {
      products[p.id].amount++
    }
    setCartHash(products);
  }

  function handlePurchase() {
    const time = new Date().toISOString().slice(0, 10);
    let order = {time: time};
    order.products = cartProducts;
    setOrderHistory([...orderHistory, order]);
    setCartHash({});
    setSuccess(true);
  }

  function handleRemove(id) {
    let products = Object.assign({}, cartHash);
    if ((id in products)) {
      let product = products[id];
      if (product.amount === 1) {
        delete products[id]
      } else {
        product.amount--;
      }
    }
    setCartHash(products);
  }

  function hashToArray() {
    var array = [];
    for (const key in cartHash) {
      array.push(cartHash[key]);
    }
    return array;
  }

  function numberOfProducts() {
    let amount = 0;
    cartProducts.forEach((item) =>{
      amount += item.amount
    });
    return amount
  }

  return (
    <div className="App">
      <Router>
        <header className="Header col-12">
          <div className="col-3">
            <Link to="/">
              <h1 className="Header-title">Alfredo's Pizza Cafe</h1>
            </Link>
          </div>
          <div className="col-7"></div>
          <nav className="col-2">
            <ul>
              <li className="Header-item col-7"><Link to="/history"><span className='Header-history'>History</span></Link></li>
              <li className="Header-item Header-cart col-5"><Link to="/cart"><CartButton numberOfProducts={numberOfProducts()}></CartButton></Link></li>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/cart">
              {success ? <Redirect to={'/thanks'}/> : <Cart products={cartProducts} onAddToCart={handleAddToCart} onRemove={handleRemove} onPurchase={handlePurchase}/>}
            </Route>
            <Route path="/history">
              <History orders={orderHistory} />
            </Route>
            <Route path="/thanks">
              <Thanks onVisit={()=>{setSuccess(false)}} />
            </Route>
            <Route path="/">
              <Home products={products} onAddToCart={handleAddToCart} />
            </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
