import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import './MultipleBookDoc.css';  // Custom style
import ScrollTop from '../../components/Scroll-top/ScrollTop';

function MultipleBookDoc() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart and total price from URL query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cartData = queryParams.get('cart');
    const totalPriceData = queryParams.get('totalPrice');
    if (cartData) {
      setCart(JSON.parse(decodeURIComponent(cartData)));
    }
    if (totalPriceData) {
      setTotalPrice(parseFloat(totalPriceData));
    }
  }, [location]);

  // Function to generate and download a unique .txt file
  const handleDownload = (book) => {
    const content = `Book Name: ${book.name}\nPrice: $${book.price.toFixed(2)}\nThank you for your purchase!`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.name}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="multiple-book-doc">
      <Header />
      <div className="container mt-5 mb-5">
        <h2 className="mb-3">Download Your Purchased Books</h2>
        {cart.length > 0 ? (
          <div className="row">
            {cart.map((book, index) => (
              <div key={index} className="col-md-3 mb-4"> {/* 4 books per row */}
                <div className="card p-3 shadow-sm">
                  <img src={book.image} alt={book.name} className="book-image mb-3" style={{ maxHeight: '150px', objectFit: 'cover' }} />
                  <h5>{book.name}</h5>
                  <p className="text-muted">Price: ${book.price.toFixed(2)}</p>
                  <button className="btn btn-primary" onClick={() => handleDownload(book)}>Download Info</button>
                </div>
              </div>
            ))}
            <div className="col-12">
              <h4>Total Price Paid: ${totalPrice.toFixed(2)}</h4>
            </div>
          </div>
        ) : (
          <div className="alert alert-info">No books found.</div>
        )}
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default MultipleBookDoc;
