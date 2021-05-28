import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="nav nav-left">
        <Link to='/'><h3>Home</h3></Link>
      </div>
      <div className="nav nav-center">
        <h3>Something</h3>
      </div>
      <div className="nav nav-right">
        <Link to='/cart'><h3>Cart</h3></Link>
      </div>
    </nav>
  )
}

export default Nav;