import React from 'react';

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className="card">
      <h2>Cart:</h2>
      <div>{cart}</div>
    </div>
  )
}

export default Cart;