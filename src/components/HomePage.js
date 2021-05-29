import React from 'react';
import ItemCard from './ItemCard';
import inventory from '../modules/inventory';

const HomePage = (props) => {
  const { setCart } = props;

  return (
    <div className="container">
      <h1>Buy something, why don't ya</h1>
      <section className="store grid">
        <ItemCard setCart={setCart} product={inventory.toaster}/>
        <ItemCard setCart={setCart} product={inventory.avocado}/>
        <ItemCard setCart={setCart} product={inventory.bread}/>
      </section>
    </div>
  )
}

export default HomePage;