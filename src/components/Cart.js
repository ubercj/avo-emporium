import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

const Cart = (props) => {
  const { cart, setCart } = props;

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = cart.reduce((sum, item) => {
      const net = item.count * item.price;
      return sum + net;
    }, 0);
    setTotal(newTotal);
  }

  useEffect(() => {
    calculateTotal();
  })

  const showCartContents = (cart) => {
    return cart.map((product) => {
      return (
        <CartCard key={product.id} cart={cart} setCart={setCart} product={product} />
      );
    })
  }

  return (
    <div className="feed card">
      <h2>Cart total: ${total.toFixed(2)}</h2>
      {showCartContents(cart)}
      <Link to="/checkout">
        <button className="card-bottom">Checkout</button>
      </Link>
    </div>
  )
}

export default Cart;