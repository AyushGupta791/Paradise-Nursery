import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from '../redux/cartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const money = (amount) => `$${amount.toFixed(2)}`;

  const checkout = () => {
    window.alert(
      'Coming Soon! Checkout is not available in this demo.'
    );
  };

  const itemCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <main className="page-wrap cart-page">
      <section className="cart-heading">
        <div>
          <p className="eyebrow">YOUR GREEN PICKS</p>
          <h1>
            Shopping <em>cart.</em>
          </h1>
        </div>

        <Link className="text-link" to="/plants">
          <ArrowLeft size={17} />
          Continue shopping
        </Link>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon">
            <ShoppingBag size={30} />
          </span>

          <h2>Your cart is waiting to grow</h2>

          <p>
            You haven't added any plants yet. Find a leafy
            friend for your home.
          </p>

          <Link className="primary-button dark-button" to="/plants">
            Explore plants <ArrowLeft size={17} />
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-panel">
            <div className="cart-table-heading">
              <span>PLANT DETAILS</span>
              <span>QUANTITY</span>
              <span>SUBTOTAL</span>
            </div>

            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img
                  className="cart-product-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-product-details">
                  <span className="cart-product-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p>
                    {money(item.price)} <span>per plant</span>
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>

                <div
                  className="quantity-control"
                  aria-label={`Quantity for ${item.name}`}
                >
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <strong className="line-total">
                  {money(item.price * item.quantity)}
                </strong>
              </article>
            ))}

            <button
              className="clear-cart"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </section>

          <aside className="order-summary">
            <p className="eyebrow">THE TOTAL</p>
            <h2>Order summary</h2>

            <div className="summary-line">
              <span>Plants ({itemCount} items)</span>
              <span>{money(total)}</span>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <span className="free-delivery">Calculated soon</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{money(total)}</strong>
            </div>

            <p className="summary-note">
              Delivery and payment details will be available soon.
            </p>

            <button
              className="checkout-button"
              onClick={checkout}
            >
              Checkout
              <ArrowLeft className="checkout-arrow" size={17} />
            </button>

            <Link className="summary-continue" to="/plants">
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
