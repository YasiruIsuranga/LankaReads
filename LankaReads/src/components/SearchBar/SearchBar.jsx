import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="input-group mb-3 search-bar">
      <div className="input-group-prepend">
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          id="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><div role="separator" className="dropdown-divider"></div></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search Books Here"
        aria-label="Search Books Here"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btnsearch" type="button" id="button-addon2">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
