import React, { useState, useEffect } from 'react';

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

  const removeFromCart = (product, cart) => {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
  }

  const showCartContents = (cart) => {
    return cart.map((product) => {
      return (
        <div key={product.id} className="card in-cart">
          <h4>{product.title}</h4>
          <p>Count: {product.count} Price: ${product.price}</p>
          <p>Total Cost: {product.count * product.price}</p>
          <button onClick={() => removeFromCart(product, cart)}>Remove</button>
        </div>
      );
    })
  }

  return (
    <div className="feed card">
      <h2>Cart total: ${total}</h2>
      {showCartContents(cart)}
    </div>
  )
}

export default Cart;