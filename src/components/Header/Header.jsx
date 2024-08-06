import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from "../../img/logo1.png";
import { FaBars } from 'react-icons/fa';

function Header() {

  return (
    <>
      <header className="container-fluid bg-white sticky-top">
        <div className="container-fluid">
          <div className="row align-items-center py-2">
            <div className="col d-flex align-items-center">
              {/* Logo */}
              <a href="#">
                <img src={logo} className='logo1' alt="Lanka Reads" />
              </a>
              {/* Mobile menu button */}
              <button className="navbar-toggler d-lg-none ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                <FaBars size={24} />
              </button>
              {/* Large screen menu */}
              <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex ms-4">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link px-4" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-4" href="/Books">Books</a></li>
                    <li className="nav-item"><a className="nav-link px-4" href="/About">About</a></li>
                     {/*<li className="nav-item"><a className="nav-link px-4" href="/Authors">Authors</a></li>*/}
                    <li className="nav-item"><a className="nav-link px-4" href="/Blogs">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link px-4" href="/Contact">Contact Us</a></li>
                    <li className="nav-item"><a className="nav-link px-4" href="/Register">Register</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              <a href="#" className="text-dark px-3 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
              </a>
              <a href="#" className="text-dark px-3 py-3" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
              <button className="px-3 btn btngetintouch ms-3">Get in Touch</button>
            </div>
          </div>
        </div>
      </header>
      
      
      <div className="offcanvas offcanvas-end w-45" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="cartOffcanvasLabel">Shopping Cart</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex flex-column">
    {/* Cart contents */}
    <div>
      <p>No products in the cart.</p>
      {/* Add more cart items here */}
    </div>
    {/* Continue Shopping button at the bottom */}
    <button className="btn btn1 mt-auto">Continue Shopping</button>
  </div>
</div>


   {/* Offcanvas Mobile Menu */}
<div className=" offcanvas offcanvas-start custom-offcanvas mobile-menu" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
  <div className="offcanvas-header ">
    <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body ">
    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link px-4" href="/">Home</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Books">Books</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/About">About</a></li>
       {/*<li className="nav-item"><a className="nav-link px-4" href="/Authors">Authors</a></li>*/}
      <li className="nav-item"><a className="nav-link px-4" href="/Blogs">Blogs</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Contact">Contact Us</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Register">Register</a></li>
    </ul>
  </div>
</div>

    </>
  );
}

export default Header;
