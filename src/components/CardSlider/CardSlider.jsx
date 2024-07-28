import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './CardSlider.css';
import card1 from '../../img/book2.jpg';

const CardSlider = () => {
    return (
        <div className="card-container">
        <Carousel>
            {/* <Carousel.Item>
            <div className="d-flex justify-content-center">
                    <Card className="d-flex flex-row align-items-center card-custom" style={{ width : '25%', height:'150px'  , margin : '15px'}}>
                        <Card.Img variant="left" src={card1} className="card-image" />
                        <Card.Body>
                            <Card.Title><h6>Book Num 1</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit amet consectetur 
                            </Card.Text>
                            <Button variant="warning" className="card-button">Details</Button>
                        </Card.Body>
                    </Card>
                    <Card className="d-flex flex-row align-items-center card-custom" style={{ width : '25%', height:'150px'  , margin : '15px'}}>
                        <Card.Img variant="left" src={card1} className="card-image" />
                        <Card.Body>
                            <Card.Title><h6>Book Num 2</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit amet consectetur 
                            </Card.Text>
                            <Button variant="warning">Details</Button>
                        </Card.Body>
                    </Card>
                    <Card className="d-flex flex-row align-items-center card-custom" style={{ width : '25%', height:'150px'  , margin : '15px'}}>
                        <Card.Img variant="left" src={card1} className="card-image" />
                        <Card.Body>
                            <Card.Title><h6>Book Num 3</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit amet consectetur 
                            </Card.Text>
                            <Button variant="warning">Details</Button>
                        </Card.Body>
                    </Card>
            </div>
            </Carousel.Item> */}
                    {/* ade eka */}
            <Carousel.Item>
                <div className="d-flex justify-content-center">

                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 1</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>10$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 2</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>12$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 3</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>20$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 4</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>15$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 5</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>11$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 6</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>18$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 7</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>22$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 8</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>20$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 9</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>8$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width : '150px', height:'230px'  , margin : '15px'}}>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title><h6>Book Num 10</h6></Card.Title>
                            <Card.Text className="book-details">
                                Lorem ipsum dolor sit 
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-between">
                            <b>10$</b>
                            <Button variant="warning"><h6 className="btn-detail">Visit</h6></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default CardSlider;