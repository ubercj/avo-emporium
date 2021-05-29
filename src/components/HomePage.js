import React from 'react';
import ItemCard from './ItemCard';
import inventory from '../modules/inventory';

const HomePage = (props) => {
  const { cart, setCart } = props;

  return (
    <div className="container">
      <h1>Buy something, why don't ya</h1>
      <section className="store grid">
        <ItemCard cart={cart} setCart={setCart} product={inventory.toaster}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.avocado}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.bread}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.spoon}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.butterKnife}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.chefsKnife}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.eggs}/>
      </section>
    </div>
  )
}

export default HomePage;