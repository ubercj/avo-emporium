import React from 'react';

const ItemCard = (props) => {
  const { setCart, title } = props;

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, title])
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default ItemCard;