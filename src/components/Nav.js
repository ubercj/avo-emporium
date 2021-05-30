import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBreadSlice } from '@fortawesome/free-solid-svg-icons';


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
        <div className="nav nav-left horizontal">
          <FontAwesomeIcon icon={faBreadSlice} className="icon toast" />
        </div>
      </Link>
      <Link to='/' className="nav-link no-decoration">
      <div className="nav nav-center">
        <h2>AvoEmporium</h2>
      </div>
      </Link>
      <Link to='/cart' className="nav-link">
        <div className="nav nav-right horizontal">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          {showCartSize(cart)}
        </div>
      </Link>
    </nav>
  )
}

export default Nav;