import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/"
        render={() => 
          <HomePage cart={cart} setCart={setCart} />}
        />
        <Route exact path="/cart"
        render={() => 
          <CartPage cart={cart} setCart={setCart} />}
        />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
