import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowUpRight, Check, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/plants.js';
import {
  addToCart,
  selectCartItems
} from '../redux/cartSlice.jsx';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <main className="page-wrap shop-page">
      <section className="page-intro">
        <p className="eyebrow">
          <Leaf size={15} />
          FIND YOUR GREEN
        </p>

        <h1>
          A little more <em>nature.</em>
        </h1>

        <p>
          Meet your next favourite plant. Pick a leafy friend
          for every corner of your home.
        </p>

        <Link className="text-link" to="/cart">
          View your basket <ArrowUpRight size={17} />
        </Link>
      </section>

      {categories.map((category) => (
        <section className="plant-category" key={category.id}>
          <div className="category-heading">
            <div>
              <span className="category-kicker">
                THE COLLECTION
              </span>
              <h2>{category.name}</h2>
            </div>

            <p>{category.intro}</p>
          </div>

          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = isInCart(plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />
                    <span className="plant-category-tag">
                      {category.name}
                    </span>
                  </div>

                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>

                    <div className="plant-card-bottom">
                      <span className="plant-price">
                        ${plant.price.toFixed(2)}
                      </span>

                      <button
                        className={`add-button ${added ? 'added' : ''}`}
                        disabled={added}
                        onClick={() =>
                          dispatch(
                            addToCart({
                              ...plant,
                              category: category.name
                            })
                          )
                        }
                      >
                        {added ? (
                          <>
                            <Check size={16} />
                            Added
                          </>
                        ) : (
                          <>
                            Add to Cart
                            <ArrowUpRight size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <footer className="shop-footer">
        A little green goes a long way. <Leaf size={15} />
      </footer>
    </main>
  );
}
