import React, { useState } from 'react';
import uniqid from 'uniqid';

const ItemCard = (props) => {
  const { setCart, product } = props;

  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const addToCart = () => {
    const newProduct = {...product};
    newProduct.id = uniqid();
    newProduct.count = count;
    setCount(0);
    setCart((prevCart) => [...prevCart, newProduct]);
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