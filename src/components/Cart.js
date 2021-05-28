import React from 'react';

const Cart = (props) => {
  const { cart, setCart } = props;

  const removeFromCart = (item, cart) => {
    const newCart = cart.filter((product) => product !== item);
    setCart(newCart);
  }

  const showCartContents = (cart) => {
    return cart.map((item, index) => {
      return (
        <div key={index} className="card in-cart">
          <h4>{item}</h4>
          <button onClick={() => removeFromCart(item, cart)}>Remove</button>
        </div>
      );
    })
  }

  return (
    <div className="feed card">
      <h2>Cart:</h2>
      {showCartContents(cart)}
    </div>
  )
}

export default Cart;