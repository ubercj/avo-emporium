import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import photos from '../modules/photos';

const CartCard = (props) => {
  const { cart, setCart, product } = props;

  const [count, setCount] = useState(product.count);
  const [wantToChange, setWantToChange] = useState(false);

  const photoList = photos.map((photo) => photo.default);

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const handleClick = () => {
    if (count > 0) {
      increaseCount(cart, product, count);
    } else {
      removeFromCart(product, cart);
    }
  }

  const increaseCount = (cart, product, count) => {
    const prodInCart = cart.find((item) => item.prodId === product.prodId);
    const prodIdx = cart.indexOf(prodInCart);

    const newCart = [...cart];
    newCart[prodIdx].count = count;
    setCart(newCart);
    setWantToChange(false);
  }

  const removeFromCart = (product, cart) => {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
  }

  const displayCount = () => {
    if (wantToChange) {
      return (
        <div>
          <label>
            Quantity:
            <input
              type="number" min="0" value={count}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleClick}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Quantity: {count}</p>
          <button onClick={() => setWantToChange(true)}>Edit Quantity</button>
        </div>
      );
    }
  }

  const calculateTotal = () => {
    return product.count * product.price
  }

  return (
    <div className="card in-cart">
      <h2>{product.title}</h2>
      <img src={photoList[product.prodId]} alt={product.title} className="small-pic" />
      {displayCount(wantToChange)}
      <p>Price: ${Number(product.price).toFixed(2)}</p>
      <p>Total Cost: ${calculateTotal().toFixed(2)}</p>
      <button
        className="card-bottom"
        onClick={() => removeFromCart(product, cart)}>
          <FontAwesomeIcon icon={faTrash} className="icon" />
          Remove
        </button>
    </div>
  );
}

export default CartCard;