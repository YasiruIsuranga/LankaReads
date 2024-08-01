import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from "../../img/logo1.png"

function Header() {
    return (
    <> 
        <header className=" container-fluid bg-white sticky-top">
            <div className="container-fluid">
                <div className="row align-items-center py-2">
                    <div className="col d-flex align-items-center">
                        <a href="#">
                            <img src={logo} className='logo' alt="Lanka Reads" />
                        </a>
                       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link px-4" href="/">Home</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Books">Books</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/About">About</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Authors">Authors</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Blogs">Blogs</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Contact">Contact Us</a></li>
      <li className="nav-item"><a className="nav-link px-4" href="/Register">Register</a></li>
    </ul>
  </div>
</nav>

                    </div>
                    <div className="col d-flex justify-content-end align-items-center px-5">
    <a href="#" className="text-dark px-3 py-3 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
    </a>
    <a href="#" className="text-dark px-3 py-3 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
        </svg>
    </a>
    <button className="px-3   btn btn1">Get in Touch</button>
</div>

                </div>
            </div>
        </header>
        <hr />
    </>
    );
}

export default Header;