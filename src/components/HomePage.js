import React from 'react';
import ItemCard from './ItemCard';
import inventory from '../modules/inventory';

const HomePage = (props) => {
  const { cart, setCart } = props;

  return (
    <div className="container">
      <section className="store grid">
        <ItemCard cart={cart} setCart={setCart} product={inventory.avocado}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.sdBread}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.bread}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.eggs}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.toaster}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.spoon}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.butterKnife}/>
        <ItemCard cart={cart} setCart={setCart} product={inventory.chefsKnife}/>
      </section>
    </div>
  )
}

export default HomePage;