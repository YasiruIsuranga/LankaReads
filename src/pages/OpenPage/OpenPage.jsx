import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import './OpenPage.css';  
function OpenPage() {
  return (
    <div className="open-pages">
      <Header />

      <div className="container mt-5 mb-5">
        <div className="cards shadow-lg rounded border-0">
          <div className="row">
            {/* Book Image Column */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="https://ew.com/thmb/MaxHBP4uhvg9_3eNeWgx_SOSku0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855669-6cfb2099b6e84a4899ce368d6facc242.jpg"  // Example book image
                alt="Book Cover"
                className="img-fluid rounded"
              />
            </div>

            {/* Book Information Column */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mb-3">Book Title</h2>
              <p className="lead mb-4">Author: Author Name</p>
              <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut urna nec lacus dapibus dapibus.</p>
              <h3 className="mb-4">$19.99</h3>
              <div className="d-flex gap-3 flex-column flex-md-row">
                <button className="btn btn11 mb-2 mb-md-0">Add to Cart</button>
                <button className="btn btn1">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OpenPage;
