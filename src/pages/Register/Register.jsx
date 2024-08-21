import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";
import ScrollTop from '../../components/Scroll-top/ScrollTop';

function Register() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseClick = () => {
        setShowLogin(false);
    };

    return (
        <div>
            <Header />
            {/* Banner Image */}
            <div className="jumbotron jumbotron-fluid text-white text-center" style={{ backgroundColor: '#f42d00', padding: '50px 0' }}>
                <div className="container">
                    <img src="https://i0.wp.com/www.rvu.edu/wp-content/uploads/2023/02/Connect-with-Us-Banner-RVU.png?fit=1082%2C252&ssl=1" alt="About Us" />
                </div>
            </div>

            {/* Register Form Section */}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <h2 className="text-center mb-4">Create Your Account</h2>
                        <form className="shadow p-5 mb-5 bg-white rounded">
                            <div className="form-group mb-4">
                                <label htmlFor="name" className="font-weight-bold">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="font-weight-bold">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="font-weight-bold">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Create a password" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="confirm-password" className="font-weight-bold">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block py-2" style={{ backgroundColor: '#f42d00', borderColor: '#f42d00', fontWeight: 'bold' }}>Register</button>
                        </form>

                        <div className="text-center">
                            <p>or register with</p>
                            <GoogleLoginButton onClick={() => alert("Google login")} style={{ width: '100%', marginBottom: '10px' }} />
                            <FacebookLoginButton onClick={() => alert("Facebook login")} style={{ width: '100%' }} />
                        </div>
                        <div className="text-center mt-3">
                            <p>Already have an account? <a href="#" onClick={handleLoginClick} style={{ color: '#f42d00' }}>Login here</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Why Join Us?</h2>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <i className="bi bi-book" style={{ fontSize: '3rem', color: '#f42d00' }}></i>
                        <h4 className="mt-3">Access to Thousands of Books</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="bi bi-people" style={{ fontSize: '3rem', color: '#f42d00' }}></i>
                        <h4 className="mt-3">Join a Community of Readers</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="bi bi-person-check" style={{ fontSize: '3rem', color: '#f42d00' }}></i>
                        <h4 className="mt-3">Personalized Recommendations</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Need Help?</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <p>If you have any questions, feel free to reach out to us!</p>
                        <a href="mailto:support@bookwebsite.com" className="btn btn-primary" style={{ backgroundColor: '#f42d00', borderColor: '#f42d00' }}>Contact Us</a>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            {showLogin && (
                <div className="modal d-flex align-items-center justify-content-center" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" style={{ maxWidth: '500px', margin: '10px' }}>
                        <div className="modal-content shadow-lg">
                            <div className="modal-header" style={{ justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #dee2e6' }}>
                                <h5 className="modal-title" style={{ color: '#f42d00' }}>Login</h5>
                                <button type="button" className="close" onClick={handleCloseClick} style={{ background: 'none', border: 'none', fontSize: '1.5rem', lineHeight: '1', color: '#f42d00' }}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="login-email" className="font-weight-bold">Email address</label>
                                        <input type="email" className="form-control" id="login-email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="login-password" className="font-weight-bold">Password</label>
                                        <input type="password" className="form-control" id="login-password" placeholder="Enter your password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-3" style={{ backgroundColor: '#f42d00', borderColor: '#f42d00' }}>Login</button>
                                </form>
                                <div className="text-center">
                                    <GoogleLoginButton onClick={() => alert("Google login")} style={{ width: '100%', marginBottom: '10px' }} />
                                    <FacebookLoginButton onClick={() => alert("Facebook login")} style={{ width: '100%' }} />
                                </div>
                                <div className="text-center mt-3">
                                    <p>Don't have an account? <a href="/register" style={{ color: '#f42d00' }}>Register here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ScrollTop/>
            <Footer />
        </div>
    );
}

export default Register;
