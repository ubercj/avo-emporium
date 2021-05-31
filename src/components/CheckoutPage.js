import React from 'react';
import { Link } from 'react-router-dom';
import doge from '../assets/doge.jpg';

const CheckoutPage = () => {

  return (
    <div className="container">
      <div className="feed">
        <h1>Checkout</h1>
        <p>Disclaimer: We only accept Dogecoin for payment.</p>
        <img src={doge} alt="A doggy" className="xtra-large-pic" />
        <p>For more information, please refer to <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer"><span>this guide</span></a>.</p>
        <Link to="/cart" className="info">Back to Cart</Link>
        <p className="fine-print">AvoEmporium is not responsible for evictions/foreclosures if you spend all of your rent money on avocado toast.</p>
      </div>
    </div>
  )
}

export default CheckoutPage;