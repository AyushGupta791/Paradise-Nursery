import React from 'react';
import { Leaf, ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice.jsx';

export default function Navbar() {
  const count = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-icon">
          <Leaf size={22} />
        </span>
        <span>
          paradise<span className="brand-light">nursery</span>
        </span>
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>

        <NavLink className="cart-link" to="/cart">
          <ShoppingBag size={18} />
          Cart
          <span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}
