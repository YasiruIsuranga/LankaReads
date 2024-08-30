import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import './OpenPage.css';
import ScrollTop from '../../components/Scroll-top/ScrollTop';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OpenPage() {
  const { bookId } = useParams(); // Extract bookId from URL parameters
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${bookId}`); // Fetch book details by ID
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('Failed to fetch book details.');
      }
    };

    fetchBookDetails();
  }, [bookId]);

  return (
    <div className="open-page">
      <Header />

      <div className="container mt-5 mb-5">
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {book ? (
          <div className="row shadow-lg rounded border-0 p-4 bg-light">
            {/* Book Image Column */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={book.image} // Use dynamic book image
                alt={`${book.name} Cover`}
                className="img-fluid rounded"
                style={{ maxHeight: '400px', objectFit: 'cover' }} // Adjust image styling
              />
            </div>

            {/* Book Information Column */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mb-3">{book.name}</h2>
              <p className="lead mb-4">Author: {book.author}</p>
              <p className="text-muted mb-4">{book.description}</p>
              <h3 className="mb-4">${book.price.toFixed(2)}</h3>
              <div className="d-flex gap-3 flex-column flex-md-row">
                <button className="btn btn-primary mb-2 mb-md-0">Add to Cart</button>
                <a href="/Payment" className="btn btn-success">
                  Pay Now
                </a>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading book details...</p>
        )}
      </div>

      <ScrollTop />
      <Footer />
    </div>
  );
}

export default OpenPage;
