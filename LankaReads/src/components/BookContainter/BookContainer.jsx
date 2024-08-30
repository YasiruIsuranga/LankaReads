import React, { useEffect, useState } from 'react';
import './BookContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Recomended() {
    const [books, setBooks] = useState([]);
    const [fictionBooks, setFictionBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books'); // Ensure this URL matches your backend setup
                setBooks(response.data);

                // Filter fiction books
                const fiction = response.data.filter(book => book.category === 'Fiction');
                setFictionBooks(fiction);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <section className="backgrounds2 py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Recommended For You</h2>
                    <div className="row justify-content-center">
                        {books.length > 0 ? (
                            books.slice(0, 6).map((book, index) => (
                                <div key={index} className="col-lg-2 col-md-4 mb-4">
                                    <div className="card h-100 text-dark">
                                        <Link to={`/OpenPage/${book.id}`}>
                                            <img 
                                                src={book.image} 
                                                className="card-img-top" 
                                                style={{ maxHeight: '230px', objectFit: 'cover' }} 
                                                alt={book.name} 
                                            />
                                        </Link>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title">{book.name}</h5>
                                            <div className='d-flex flex-column justify-content-between align-items-center mt-3'>
                                                <b><p className="card-text mb-0">${book.price.toFixed(2)}</p></b>
                                                <button className="btn btn-primary add-btn">Add To Cart</button>
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

            <section className="backgrounds2 py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Fiction Books</h2>
                    <div className="row justify-content-center">
                        {fictionBooks.length > 0 ? (
                            fictionBooks.map((book, index) => (
                                <div key={index} className="col-lg-2 col-md-4 mb-4">
                                    <div className="card h-100 text-dark">
                                        <Link to={`/OpenPage/${book.id}`}>
                                            <img 
                                                src={book.image} 
                                                className="card-img-top" 
                                                style={{ maxHeight: '230px', objectFit: 'cover' }} 
                                                alt={book.name} 
                                            />
                                        </Link>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title">{book.name}</h5>
                                            <div className='d-flex flex-column justify-content-between align-items-center mt-3'>
                                                <b><p className="card-text mb-0">${book.price.toFixed(2)}</p></b>
                                                <button className="btn btn-primary add-btn">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No fiction books available</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Recomended;
