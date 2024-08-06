import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview.css';
import { FaUsers, FaBook, FaStore, FaPenNib } from 'react-icons/fa';

function Overview() {
    return (
        <div className="container-fluid my-5 ">
            <div className="row text-center">
                <div className="col-md-3">
                    <FaUsers size={50} className="text-orange mb-3" />
                    <h2>125,663</h2>
                    <p>Happy Customers</p>
                </div>
                <div className="col-md-3">
                    <FaBook size={50} className="text-orange mb-3" />
                    <h2>50,672</h2>
                    <p>Book Collections</p>
                </div>
                <div className="col-md-3">
                    <FaStore size={50} className="text-orange mb-3" />
                    <h2>1,562</h2>
                    <p>Our Stores</p>
                </div>
                <div className="col-md-3">
                    <FaPenNib size={50} className="text-orange mb-3" />
                    <h2>475</h2>
                    <p>Famous Writers</p>
                </div>
            </div>
        </div>
    );
}

export default Overview;
