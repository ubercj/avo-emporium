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
      <Link to='/' className="nav-link">
        <div className="nav nav-left"><h3>Home</h3></div>
      </Link>
      <div className="nav nav-center">
        <h3>Something</h3>
      </div>
      <Link to='/cart' className="nav-link">
        <div className="nav nav-right">{showCartSize(cart)}</div>  
      </Link>
    </nav>
  )
}

export default Nav;