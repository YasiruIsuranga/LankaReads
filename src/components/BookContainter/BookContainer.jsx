import React from 'react';
import './BookContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../img/you.jpg'
import image2 from '../../img/aow.jpg'
import image3 from '../../img/atomic.jpeg'
import image4 from '../../img/prince.jpg'
import image5 from '../../img/anna.jpg'
import image6 from '../../img/mocking-bird.webp'
import image7 from '../../img/desperate.jpg'
import image8 from '../../img/lottery.jpg'

function Recomended() {
    const books = [
        { title: 'YOU', price: '$22.89', image: image1},
        { title: 'The Art Of War', price: '$21.89', image:image2 },
        { title: 'Atomic Habits', price: '$30.89', image:image3 },
        { title: 'The Prince', price: '$25.89', image:image4 },
        { title: 'Anna Karenina', price: '$22.89', image: image5},
        { title: 'To Kill a Mockingbird', price: '$21.89', image:image6 },
        { title: 'Desperate Characters', price: '$30.89', image:image7 },
        { title: 'The Lottery', price: '$25.89', image:image8 }
    ];

    return (
        <>
        <section className="backgrounds2 py-5">
            <div className="container text-center">
                <h2 className="mb-4">Recommended For You</h2>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis tempore, placeat vel 
                    voluptates commodi repellendus quis minus, iure esse atque consequatur? Nostrum earum quibusdam minima dolorum ab atque
                </p>
                <div className="row justify-content-center">
                    {books.map((book, index) => (
                        <div key={index} className="col-lg-2 col-md-4 mb-4">
                            <div className="card h-100 text-dark">
                                <a href="/OpenPage"><img src={book.image} className="card-img-top" style={{maxHeight:'230px'}} alt={book.title} /></a>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title">{book.title}</h5>
                                    <div className='d-flex flex-column justify-content-between align-items-center mt-3'>
                                        <b><p className="card-text mb-0">{book.price}</p></b>
                                        <button className="btn add-btn">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="backgrounds2 py-5">
            <div className="container text-center">
                <h2 className="mb-4">Non-Fictions</h2>
                <div className="row justify-content-center">
                    {books.map((book, index) => (
                        <div key={index} className="col-lg-2 col-md-4 mb-4">
                            <div className="card h-100 text-dark">
                            <a href="/OpenPage"><img src={book.image} className="card-img-top" style={{maxHeight:'230px'}} alt={book.title} /></a>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title">{book.title}</h5>
                                    <div className='d-flex flex-column justify-content-between align-items-center mt-3'>
                                        <b><p className="card-text mb-0">{book.price}</p></b>
                                        <button className="btn add-btn">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="backgrounds2 py-5">
            <div className="container text-center">
                <h2 className="mb-4">Fictions</h2>
                <div className="row justify-content-center">
                    {books.map((book, index) => (
                        <div key={index} className="col-lg-2 col-md-4 mb-4">
                            <div className="card h-100 text-dark">
                            <a href="/OpenPage"><img src={book.image} className="card-img-top" style={{maxHeight:'230px'}} alt={book.title} /></a>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title">{book.title}</h5>
                                    <div className='d-flex flex-column justify-content-between align-items-center mt-3'>
                                        <b><p className="card-text mb-0">{book.price}</p></b>
                                        <button className="btn add-btn">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* <section className="py-5 backgrounds2" >
            <div className="container text-center">
                <h2 className="mb-4">Non-Fictions</h2>
                
                <div className="row">
                    {books.map((book, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100 text-dark">
                                <img src={book.image} className="card-img-top" style={{maxHeight:'350px'}} alt={book.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.price}</p>
                                    <button className="btn btn1">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> */}
        </>
    );
}

export default Recomended;
