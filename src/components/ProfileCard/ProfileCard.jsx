import React from 'react';
import './ProfileCard.css';
import ProPic from '../../img/PP.png'

const ProfileCard = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px', border: 'none' }}>
      <div className="row g-0">
        <div className="col-md-3 pro-pic">
          <img src={ProPic} style={{ maxWidth: '100px', borderRadius:'50px' }} alt="User" />
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
