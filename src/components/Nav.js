import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { cart } = props;

  const showCartSize = (cart) => {
    if (cart.length > 0) {
      return <h3>Cart {cart.length}</h3>
    } else {
      return <h3>Cart</h3>
    }
  }

  return (
    <nav>
      <div className="nav nav-left">
        <Link to='/'><h3>Home</h3></Link>
      </div>
      <div className="nav nav-center">
        <h3>Something</h3>
      </div>
      <div className="nav nav-right">
        <Link to='/cart'>{showCartSize(cart)}</Link>
      </div>
    </nav>
  )
}

export default Nav;