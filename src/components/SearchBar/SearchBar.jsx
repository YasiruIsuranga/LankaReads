import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="input-group mb-3 search-bar">
      <div className="input-group-prepend">
        <button  className="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div role="separator" className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input type="text" style={{borderRadius:'10px', marginLeft:'10px'}} className="form-control search-input" placeholder="Search Books Here" aria-label="Search Books Here" aria-describedby="button-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btnsearch" type="button" id="button-addon2">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
