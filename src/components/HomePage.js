import React from 'react';
import ItemCard from './ItemCard';

const HomePage = (props) => {
  const { cart, setCart } = props;

  return (
    <div className="container">
      <h1>Home Page</h1>
      <section className="store grid">
        <ItemCard setCart={setCart} title="toaster"/>
        <ItemCard setCart={setCart} title="bread"/>
        <ItemCard setCart={setCart} title="jam"/>
      </section>
    </div>
  )
}

export default HomePage;