import React from 'react';
import inventory from '../modules/inventory';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';

const ItemPage = (props) => {
  const { cart, setCart } = props
  const { id } = useParams();

  const getProductById = (id) => {
    const productValues = Object.values(inventory);
    const targetProduct = productValues.filter((product) => {
      return product.prodId === id;
    })[0];
    return targetProduct;
  }

  const product = getProductById(Number(id));

  return (
    <div className="container">
      <ItemCard cart={cart} setCart={setCart} product={product} productPage={true} />
    </div>
  )
}

export default ItemPage;