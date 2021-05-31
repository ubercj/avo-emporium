import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import CheckoutPage from './components/CheckoutPage';
import ItemPage from './components/ItemPage';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <HashRouter basename="/avo-emporium">
      <Nav cart={cart} />
      <Switch>
        <Route exact path="/"
        render={() => 
          <HomePage cart={cart} setCart={setCart} />}
        />
        <Route exact path="/cart"
        render={() => 
          <CartPage cart={cart} setCart={setCart} />}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/products/:id" children={<ItemPage cart={cart} setCart={setCart} />} />
        <Redirect to='/' />
      </Switch>
    </HashRouter>
  );
}

export default App;
