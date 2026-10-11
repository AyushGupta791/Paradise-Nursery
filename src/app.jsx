
import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { ArrowRight, Leaf, Sprout } from 'lucide-react';
import Navbar from './components/navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './app.css';

function Home() {
  return (
    <main className="hero">
      <div className="hero-shade" />

      <section className="hero-content">
        <div className="hero-mark">
          <Sprout size={27} />
          <span>GROW YOUR HAPPY PLACE</span>
        </div>

        <h1>
          Paradise
          <br />
          <em>Nursery</em>
        </h1>

        <p className="hero-copy">
          Bring nature home. Discover beautiful plants
          that make every corner feel alive.
        </p>

        <Link className="primary-button" to="/plants">
          Get Started <ArrowRight size={18} />
        </Link>

        <div className="hero-note">
          <Leaf size={16} />
          Carefully chosen plants. Happier spaces.
        </div>
      </section>

      <div className="hero-bottom">
        <span>ROOTED IN NATURE</span>
        <span>EST. WITH LOVE</span>
        <span>MADE FOR YOUR HOME</span>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
