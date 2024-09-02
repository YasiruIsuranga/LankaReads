import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import ProfileCard from '../ProfileCard/ProfileCard';
import AddCart from '../AddCart/AddCart';
import Wishlist from '../Wishlist/Wishlist';
import { ThemeContext } from '../../contexts/ThemeContext'; // Import the ThemeContext

function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Use context

  useEffect(() => {
    const currentMode = localStorage.getItem('theme');
    if (currentMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      <header className={`header container-fluid sticky-top scaled-content ${isDarkMode ? 'dark-mode' : ''}`}>
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
            <div className="col-auto d-flex align-items-center">
              <AddCart />
              <button className="btn btn-light mx-2 mx-lg-3 py-2" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <ProfileCard />
            </div>
          </div>
        </div>
      </header>
      <div className={`offcanvas offcanvas-start ${isDarkMode ? 'dark-mode' : ''}`} tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
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
