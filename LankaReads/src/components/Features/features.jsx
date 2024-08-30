import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Features.css";
import { FaShippingFast, FaShieldAlt, FaGem, FaRedoAlt } from 'react-icons/fa';

function Features() {
    return (
        <div className="container-fluid my-5 feature-background">
            <div className='row text-center'>
                <h2 className="feature-title">Our Best Features</h2>
            </div>
            <div className="row text-center mt-4">
                <div className="col-lg-3 col-md-6 mb-4">
                    <FaShippingFast size={40} className="feature-icon mb-3" />
                    <h4>Fast Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa.</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <FaShieldAlt size={40} className="feature-icon mb-3" />
                    <h4>Safe Transactions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa.</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <FaGem size={40} className="feature-icon mb-3" />
                    <h4>Premium Quality</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa.</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <FaRedoAlt size={40} className="feature-icon mb-3" />
                    <h4>Easy Returns</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
