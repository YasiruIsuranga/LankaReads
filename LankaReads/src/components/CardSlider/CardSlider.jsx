import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import './CardSlider.css';

const CardSlider = () => {
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

    // Split the books into chunks for the carousel
    const chunkSize = 5;
    const chunks = [];
    for (let i = 0; i < books.length; i += chunkSize) {
        chunks.push(books.slice(i, i + chunkSize));
    }

    return (
        <div className="card-slider-container">
            <Carousel>
                {chunks.map((chunk, chunkIndex) => (
                    <Carousel.Item key={chunkIndex}>
                        <div className="d-flex justify-content-center">
                            {chunk.length > 0 ? (
                                chunk.map((book, index) => (
                                    <Card key={index} className="book-card">
                                        <Card.Img variant="top" src={book.image} className="card-image" />
                                        <Card.Body>
                                            <div className="card-title-row">
                                                <Card.Title className="card-title"><h6>{book.name}</h6></Card.Title>
                                            </div>
                                            <div className="card-details-row">
                                                <b className="card-price">{book.price ? `$${book.price.toFixed(2)}` : "Price Not Available"}</b>
                                                <Button variant="warning" className="btn-visit">Visit</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))
                            ) : (
                                <p>No books available</p>
                            )}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;
