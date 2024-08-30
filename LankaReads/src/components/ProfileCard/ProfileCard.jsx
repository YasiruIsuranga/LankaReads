import React from 'react';
import './ProfileCard.css';
import ProPic from '../../img/PP.png'

const ProfileCard = () => {
  return (
    <div className="col-4 d-flex flex-row P-card">
      <div className="row g-0 d-flex align-items-center justify-content-between">
        <div className="col-md-3 pro-pic">
          <img src={ProPic} style={{ maxWidth: '40px', borderRadius:'50px' }} alt="User" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Hi, User,</h5>
            <p className="card-text">Example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
