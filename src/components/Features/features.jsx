import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Features.css";
import { FaTruck, FaLock, FaStar, FaUndo } from 'react-icons/fa';

function Features() {
    return (
        <div className="container-fluid my-5 background">
            <div className='row text-center'>
                <h2>Best Features From Us</h2>
            </div>
            <br />
            <br />
            <div className="row text-center">
                <div className="col-md-3">
                    <FaTruck size={50} className="  icon mb-3" />
                    <h2>Quick Delivery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa, modi consequatur aspernatur natus dolore delectus animi ipsam.</p>
                </div>
                <div className="col-md-3">
                    <FaLock size={50} className="icon mb-3" />
                    <h2>Secure Payments</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa, modi consequatur aspernatur natus dolore delectus animi ipsam.</p>
                </div>
                <div className="col-md-3">
                    <FaStar size={50} className="icon mb-3" />
                    <h2>Best Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa, modi consequatur aspernatur natus dolore delectus animi ipsam.</p>
                </div>
                <div className="col-md-3">
                    <FaUndo size={50} className="icon mb-3" />
                    <h2>Return Guarantee</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora blanditiis ipsa, modi consequatur aspernatur natus dolore delectus animi ipsam.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
