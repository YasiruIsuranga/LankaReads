import React, { useEffect, useState } from 'react';
import './recomended.css'; // Ensure this path is correct and the file is styled accordingly
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Recommended() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books'); // Ensure this URL matches your backend setup
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <section className="recommended-section py-5">
            <div className="container text-center">
                <h2 className="recommended-title mb-4">Recommended For You</h2>
                <div className="row justify-content-center">
                    {books.length > 0 ? (
                        books.slice(0, 4).map((book, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="book-card h-100">
                                    <a href="/OpenPage">
                                        <img 
                                            src={book.image || 'https://via.placeholder.com/150'} 
                                            className="book-img" 
                                            alt={book.name || "Book Image"} 
                                        />
                                    </a>
                                    <div className="book-body d-flex flex-column justify-content-between">
                                        <h5 className="book-title">{book.name || "No Title Available"}</h5>
                                        <div className="book-footer">
                                            <p className="book-price">${book.price ? book.price.toFixed(2) : "Price Not Available"}</p>
                                            <button className="btn add-to-cart-btn">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No recommended books available</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Recommended;
