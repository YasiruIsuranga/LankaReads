import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import ProfileCard from '../ProfileCard/ProfileCard';
import axios from 'axios';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem('theme');
    if (currentMode === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleCheckout = async () => {
    try {
      const amount = 5000;
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
      <header className="container-fluid bg-white sticky-top scaled-content">
        <div className="container-fluid">
          <div className="row align-items-center py-2">
            <div className="col d-flex align-items-center">
              <a href="#">
                <img 
                  src={isDarkMode ? logo2 : logo1} 
                  className='logo1' 
                  alt="Lanka Reads" 
                  style={{ width: 'auto', height: 'auto', maxHeight: '80px' }}
                />
              </a>
              <button className="navbar-toggler d-lg-none ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                <FaBars size={24} />
              </button>
              <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex ms-4 align-items-center">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/Books">Books</a></li>
                    <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/About">About</a></li>
                    <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/Blogs">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/Contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/Register">Register</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              <a href="#" className="text-dark px-2 px-lg-3 py-2" data-bs-toggle="offcanvas" data-bs-target="#WishOffcanvas" aria-controls="WishOffcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
              </a>
              <a href="#" className="text-dark px-2 px-lg-3 py-2" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
              <ProfileCard />
              <button className="btn btn11 ms-3" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Cart Offcanvas */}
      <div className="offcanvas offcanvas-end w-45" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartOffcanvasLabel">Shopping Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <div>
            <p>No products in the cart.</p>
          </div>
          <button className="btn btn11 mt-auto" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>

      {/* Wishlist Offcanvas */}
      <div className="offcanvas offcanvas-end w-45" tabIndex="-1" id="WishOffcanvas" aria-labelledby="WishOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="WishOffcanvasLabel">Wish List</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <div>
            <p>No products in the wishlist.</p>
          </div>
        </div>
      </div>

      {/* Offcanvas Mobile Menu */}
      <div className="offcanvas offcanvas-start custom-offcanvas mobile-menu" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/Books">Books</a></li>
            <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/Blogs">Blogs</a></li>
            <li className="nav-item"><a className="nav-link" href="/Contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="/Register">Register</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
