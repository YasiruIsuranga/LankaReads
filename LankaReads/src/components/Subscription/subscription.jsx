import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './subscription.css';

function Subscription() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        const result = await response.json();

        if (response.ok) {
            setIsSubscribed(true);
            setPopupMessage('You have successfully subscribed!');
            alert('You have successfully subscribed!');

            // Optionally clear form fields
            setName('');
            setEmail('');
        } else {
            alert('Subscription failed. Please try again.');
        }
    };

    return (
        <div className='subscription'>
            <div className="container-fluid text-white py-4">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-6 text-center">
                        <h2 className="subscription-title">Stay Updated with Us</h2>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <form className="d-flex flex-column flex-md-row justify-content-center align-items-center" onSubmit={handleSubscribe}>
                            <input
                                type="text"
                                className="form-control mb-2 mb-md-0 me-md-2"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                className="form-control mb-2 mb-md-0 me-md-2"
                                placeholder="Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btnsubscribe" disabled={isSubscribed}>
                                {isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
                            </button>
                        </form>
                        {popupMessage && <div className="alert alert-success mt-3">{popupMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;
