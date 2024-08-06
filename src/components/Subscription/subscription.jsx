import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './subscription.css';


function Subscription() {
    return (
        <div className='subscription' style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/27/15/08/360_F_427150821_oQOZiOLP6lnWQdUmUG0YgQiTUsjmaGwE.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}> 
    <div className="container-fluid text-white py-3 m-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center text-md-end">
                <h1>Subscribe Us to Know any Updates...</h1>
            </div>
            <div className="col-md-6 text-center text-md-start">
                <form className="d-flex justify-content-center">
                    <input type="email" className="form-control me-2" placeholder="Your Email Address" style={{ maxWidth: '300px' }} />
                    <button type="submit" className="btn btnsubscribe">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </div>
</div>

    );
}

export default Subscription;
