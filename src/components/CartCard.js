import React, { useState } from 'react';

const CartCard = (props) => {
  const { cart, setCart, product } = props;

  const [count, setCount] = useState(product.count);
  const [wantToChange, setWantToChange] = useState(false);

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
            Count:
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

  return (
    <div className="card in-cart">
      <h4>{product.title}</h4>
      {displayCount(wantToChange)}
      <p>Total Cost: {product.count * product.price}</p>
      <button onClick={() => removeFromCart(product, cart)}>Remove</button>
    </div>
  );
}

export default CartCard;