import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import './Register.css';
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
        <div className={`register-page ${document.body.classList.contains('dark-mode') ? 'dark-mode' : ''}`}>
            <Header />
            <div className="register-section">
                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                    <div className="row w-100">
                        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                            <h2 className="text-center mb-3">Register Here</h2>
                            <form className="shadow p-3 mb-4 rounded">
                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="font-weight-bold">Name</label>
                                    <input type="text" className="form-control form-control-sm" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="font-weight-bold">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="font-weight-bold">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="password" placeholder="Create a password" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirm-password" className="font-weight-bold">Confirm Password</label>
                                    <input type="password" className="form-control form-control-sm" id="confirm-password" placeholder="Confirm your password" />
                                </div>
                                <button type="submit" className="btn btn-danger btn-block py-1">Register</button>
                            </form>
                            <div className="text-center">
                                <p>or register with</p>
                                <GoogleLoginButton onClick={() => alert("Google login")} style={{ width: '60%', marginBottom: '8px', transform: 'scale(0.9)' }} />
                                <FacebookLoginButton onClick={() => alert("Facebook login")} style={{ width: '60%', transform: 'scale(0.9)' }} />
                            </div>
                            <div className="text-center mt-2">
                                <p>Already have an account? <a href="#" onClick={handleLoginClick} style={{ color: '#f42d00' }}>Login here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showLogin && (
                <div className="modal d-flex align-items-center justify-content-center login-modal">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content shadow-lg login-card">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button type="button" className="close close-button" onClick={handleCloseClick}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group mb-2">
                                        <label htmlFor="login-email" className="font-weight-bold">Email address</label>
                                        <input type="email" className="form-control form-control-sm" id="login-email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="login-password" className="font-weight-bold">Password</label>
                                        <input type="password" className="form-control form-control-sm" id="login-password" placeholder="Enter your password" />
                                    </div>
                                    <button type="submit" className="btn btn-danger btn-block mb-2">Login</button>
                                </form>
                                <div className="text-center">
                                    <GoogleLoginButton onClick={() => alert("Google login")} style={{ width: '60%', marginBottom: '8px', transform: 'scale(0.9)' }} />
                                    <FacebookLoginButton onClick={() => alert("Facebook login")} style={{ width: '60%', transform: 'scale(0.9)' }} />
                                </div>
                                <div className="text-center mt-2">
                                    <p>Don't have an account? <a href="/register" style={{ color: '#f42d00' }}>Register here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
            <ScrollTop />
        </div>
    );
}

export default Register;
