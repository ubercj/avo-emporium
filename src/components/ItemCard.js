import React, { useState } from 'react';
import uniqid from 'uniqid';

const ItemCard = (props) => {
  const { cart, setCart, product } = props;

  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const increaseCount = (cart, product, count) => {
    const prodInCart = cart.find((item) => item.prodId === product.prodId);
    const prodIdx = cart.indexOf(prodInCart);

    const newCart = [...cart];

    const currentCount = parseInt(newCart[prodIdx].count);
    const newCount = currentCount + parseInt(count);
    newCart[prodIdx].count = newCount;

    setCart(newCart);
    setCount(0);
  }

  const addToCart = () => {
    if (cart.find((item) => item.prodId === product.prodId)) {
      increaseCount(cart, product, count);
    } else {
    const newProduct = {...product};
    newProduct.id = uniqid();
    newProduct.count = count;
    setCount(0);
    setCart((prevCart) => [...prevCart, newProduct]);
    console.log(`End of function. Product id is ${newProduct.prodId}`);
    }
  }

  const showAddButton = () => {
    if (count > 0) {
      return <button onClick={addToCart}>Add to cart</button>
    } else {
      return <button disabled onClick={addToCart}>Add to cart</button>
    }
  }

  return (
    <div className="card">
      <h2>{product.title}</h2>
      <div>
        <p>Price: ${product.price}</p>
        <label>
          Count:
          <input
            type="number" min="0" value={count}
            onChange={handleChange}
          />
        </label>
      </div>
      {showAddButton()}
    </div>
  )
}

export default ItemCard;