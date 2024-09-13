import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import ProfileCard from '../ProfileCard/ProfileCard';
import AddCart from '../AddCart/AddCart';
import { ThemeContext } from '../../contexts/ThemeContext'; // Import the ThemeContext
import { useNavigate } from 'react-router-dom'; // For navigation

function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Use context
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [user, setUser] = useState(null); // Store user details (name and email)
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Manage modal visibility
  const navigate = useNavigate(); // React router navigation hook

  useEffect(() => {
    // Check if user is already logged in (example with localStorage)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }

    const currentMode = localStorage.getItem('theme');
    if (currentMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    setShowLogoutModal(true); // Show the confirmation modal
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setShowLogoutModal(false); // Hide the modal
    navigate('/'); // Redirect to home after logout
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Hide the modal without logging out
  };

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
                    {!isLoggedIn && (
                      <li className="nav-item"><a className="nav-link px-2 px-lg-4" href="/Register">Register</a></li>
                    )}
                    {isLoggedIn && (
                      <li className="nav-item">
                        <a 
                          className="nav-link px-2 px-lg-4 "
                          style={{ cursor: 'pointer' }}
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-auto d-flex align-items-center">
              <AddCart />
              <button className="btn btn-light mx-2 mx-lg-3 py-2" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <ProfileCard user={user} />
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
            {!isLoggedIn && (
              <li className="nav-item"><a className="nav-link" href="/Register">Register</a></li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <div className={`modal fade ${showLogoutModal ? 'show' : ''}`} id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden={!showLogoutModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="logoutModalLabel">Confirm Logout</h5>
              <button type="button" className="btn-close" onClick={cancelLogout} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to log out?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={cancelLogout}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={confirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
