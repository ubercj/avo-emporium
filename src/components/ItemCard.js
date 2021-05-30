import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import photos from '../modules/photos';

const ItemCard = (props) => {
  const { cart, setCart, product, productPage } = props;

  const [count, setCount] = useState(0);

  const photoList = photos.map((photo) => photo.default);

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const handleClick = () => {
    if (cart.find((item) => item.prodId === product.prodId)) {
      increaseCount(cart, product, count);
    } else {
      addToCart(product, count);
    }
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

  const addToCart = (product, count) => {
    const newProduct = {...product};
    newProduct.id = uniqid();
    newProduct.count = count;
    setCount(0);
    setCart((prevCart) => [...prevCart, newProduct]);
  }

  const showAddButton = () => {
    if (count > 0) {
      return ( 
        <button className="card-bottom" onClick={handleClick}>
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
          Add to cart
        </button>
      );
    } else {
      return (
      <button className="card-bottom" disabled onClick={handleClick}>
        <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        Add to cart
      </button>
      )
    }
  }

  const renderPage = () => {
    if (productPage) {
      return (
        <div className="container">
          <img src={photoList[product.prodId]} alt={product.title} className="large-pic" />
          <p>Price: ${Number(product.price).toFixed(2)}</p>
          <label>
            Quantity:
            <input
              type="number" min="0" value={count}
              onChange={handleChange}
            />
          </label>
          {showAddButton()}
          <Link to="/" className="info">Back</Link>
        </div>
      );
    } else {
      return (
        <div className="card">
          <h2>{product.title}</h2>
          <img src={photoList[product.prodId]} alt={product.title} className="small-pic" />
          <p>Price: ${Number(product.price).toFixed(2)}</p>
          <label>
            Quantity:
            <input
              type="number" min="0" value={count}
              onChange={handleChange}
            />
          </label>
          {showAddButton()}
          <Link to={`/products/${product.prodId}`} className="info">More info</Link>
        </div>
      );
    }
  }

  return (
    renderPage()
  )
}

export default ItemCard;