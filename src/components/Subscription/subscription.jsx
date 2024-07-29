import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './subscription.css';


function Subscription() {
    return (
        <div className='subscription'> 
        <div className="container-fluid  text-white py-3">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center text-md-end">
                    <h1>Subscribe Us to Know any Updates...</h1>
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <form className="d-flex justify-content-center">
                        <input type="email" className="form-control me-2" placeholder="Your Email Address" style={{ maxWidth: '300px' }} />
                        <button type="submit" className="btn btn1">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div></div>
    );
}

export default Subscription;
