import React from 'react';
import Cart from './Cart';

const CartPage = (props) => {
  const { cart, setCart } = props;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default CartPage;