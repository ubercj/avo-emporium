import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {

  return (
    <div className="container">
      <h1>Checkout</h1>
      <p>Disclaimer: We only accept Dogecoin for payment.</p>
      <p>For more information, please refer to <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer"><span>this guide</span></a>.</p>
      <Link to="/cart">Back to Cart</Link>
    </div>
  )
}

export default CheckoutPage;