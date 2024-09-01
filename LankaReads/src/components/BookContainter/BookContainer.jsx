import React from 'react';
import './BookContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext'; // Import CartContext
import { useContext } from 'react';

function BookContainer({ books }) {
    const { addToCart } = useContext(CartContext); // Use CartContext

    // Filter books by category
    const fictionBooks = books.filter(book => book.category === 'Fiction');
    const nonFictionBooks = books.filter(book => book.category === 'Non-Fiction');
    const scienceBooks = books.filter(book => book.category === 'Science');

    return (
        <>
            {/* Recommended For You Section */}
            <section className="backgrounds2 py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Recommended For You</h2>
                    <div className="row justify-content-center">
                        {books.length > 0 ? (
                            books.slice(0, 6).map((book, index) => (
                                <div key={index} className="col-lg-3 col-md-4 mb-4">
                                    <div className="card h-100 text-dark">
                                        <Link to={`/OpenPage/${book._id}`}>
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
                                                <div className="button-group d-flex mt-2">
                                                    <Link to={`/OpenPage/${book._id}`} className="btn btn-secondary btn-visit me-2">
                                                        Visit
                                                    </Link>
                                                    <button 
                                                        className="btn btn-primary add-btn"
                                                        onClick={() => addToCart(book)}
                                                    >
                                                        Add Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No books available</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Fiction Books Section */}
            <section className="backgrounds2 py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Fiction Books</h2>
                    <div className="row justify-content-center">
                        {fictionBooks.length > 0 ? (
                            fictionBooks.map((book, index) => (
                                <div key={index} className="col-lg-3 col-md-4 mb-4">
                                    <div className="card h-100 text-dark">
                                        <Link to={`/OpenPage/${book._id}`}>
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
                                                <div className="button-group d-flex mt-2">
                                                    <Link to={`/OpenPage/${book._id}`} className="btn btn-secondary btn-visit me-2">
                                                        Visit
                                                    </Link>
                                                    <button 
                                                        className="btn btn-primary add-btn"
                                                        onClick={() => addToCart(book)}
                                                    >
                                                        Add Cart
                                                    </button>
                                                </div>
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

            {/* Non-Fiction Books Section */}
            <section className="backgrounds2 py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Non-Fiction Books</h2>
                    <div className="row justify-content-center">
                        {nonFictionBooks.length > 0 ? (
                            nonFictionBooks.map((book, index) => (
                                <div key={index} className="col-lg-3 col-md-4 mb-4">
                                    <div className="card h-100 text-dark">
                                        <Link to={`/OpenPage/${book._id}`}>
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
                                                <div className="button-group d-flex mt-2">
                                                    <Link to={`/OpenPage/${book._id}`} className="btn btn-secondary btn-visit me-2">
                                                        Visit
                                                    </Link>
                                                    <button 
                                                        className="btn btn-primary add-btn"
                                                        onClick={() => addToCart(book)}
                                                    >
                                                        Add Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No non-fiction books available</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Science Books Section */}
            <section className="backgrounds2 py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Science Books</h2>
                    <div className="row justify-content-center">
                        {scienceBooks.length > 0 ? (
                            scienceBooks.map((book, index) => (
                                <div key={index} className="col-lg-3 col-md-4 mb-4">
                                    <div className="card h-100 text-dark">
                                        <Link to={`/OpenPage/${book._id}`}>
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
                                                <div className="button-group d-flex mt-2">
                                                    <Link to={`/OpenPage/${book._id}`} className="btn btn-secondary btn-visit me-2">
                                                        Visit
                                                    </Link>
                                                    <button 
                                                        className="btn btn-primary add-btn"
                                                        onClick={() => addToCart(book)}
                                                    >
                                                        Add Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No science books available</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookContainer;
