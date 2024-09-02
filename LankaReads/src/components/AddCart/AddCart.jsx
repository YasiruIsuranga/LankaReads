import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios';
import './AddCart.css';

function AddCart({ isDarkMode }) {
  const { cart, removeFromCart, getCartCount, getTotalPrice } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const amount = getTotalPrice() * 100; // Convert to cents for Stripe
      const response = await axios.post('http://localhost:5000/create-checkout-session', { amount });
      const sessionUrl = response.data.url;
      window.location.href = sessionUrl;
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('There was an issue with the checkout. Please try again later.');
    }
  };

  return (
    <>
      <a
        href="#"
        className={`text-dark px-2 px-lg-3 py-2 ${isDarkMode ? 'dark-mode' : ''}`}
        data-bs-toggle="offcanvas"
        data-bs-target="#cartOffcanvas"
        aria-controls="cartOffcanvas"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
          <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
        </svg>
        <span className={`badge bg-danger rounded-pill ${isDarkMode ? 'dark-mode' : ''}`}>{getCartCount()}</span>
      </a>

      <div className={`offcanvas offcanvas-end offcanvas-container ${isDarkMode ? 'dark-mode' : ''}`} tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className={`offcanvas-title ${isDarkMode ? 'dark-mode' : ''}`} id="cartOffcanvasLabel">Shopping Cart</h5>
          <button type="button" className={`btn-close ${isDarkMode ? 'dark-mode' : ''}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          {cart.length > 0 ? (
            cart.map((book, index) => (
              <div key={index} className={`cart-item d-flex justify-content-between align-items-center mb-3 p-2 shadow-sm ${isDarkMode ? 'dark-mode' : ''}`}>
                <img src={book.image} alt={book.name} className="cart-item-image me-3" />
                <div className="cart-item-details">
                  <span>{book.name}</span>
                  <div className={`text-muted price-quantity`}>
                    ${book.price.toFixed(2)} x(1) {book.quantity}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products in the cart.</p>
          )}
          {cart.length > 0 && (
            <>
              <div>
                <strong className={`total-price`}>Total Price: ${getTotalPrice().toFixed(2)}</strong>
              </div>
              <button className={`btn btn11 mt-auto`} onClick={handleCheckout}>Checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AddCart;
