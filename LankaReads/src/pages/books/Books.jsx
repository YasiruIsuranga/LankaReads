import React from 'react'
import Header from '../../components/Header/Header'
import ScrollTop from '../../components/Scroll-top/ScrollTop'

import Footer from '../../components/Footer/footer'
import './Books.css';
import BookContainer from '../../components/BookContainter/BookContainer';

function Books() {
  return (
    <>
    <Header /> 
    <div className='container-fluid book-fullpage'>
      <div className='row justify-content-center mt-5'>
        <div className='col-8'>
          <div className="input-group mb-3">
            <div className="input-group-prepend mt-3">
              <button className="btn btn-danger dropdown-toggle me-3 catogary-btn" type="button">Category</button>
            </div>
            <input type="text" className="form-control mt-3 booksearchinput" style={{borderRadius:'5px'}} placeholder="Search Books Here" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary search-btn2 mt-3" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <BookContainer />
      </div>
    </div>
    <ScrollTop/>
    <Footer />
    </>
  )
}

export default Books