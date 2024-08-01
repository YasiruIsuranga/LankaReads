import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
  return (
    <>
    <Header />
    
    <div>
    <div className="jumbotron jumbotron-fluid text-white text-center" style={{ backgroundColor: '#f42d00', padding: '50px 0' }}>
                <div className="container">
                <img src="https://www.obiyaninfotech.com/wp-content/uploads/2018/10/about-us-1024x256.jpg" alt="About Us" />
                    
                </div>
            </div>
        
        <div className="container my-5"style={{ boxShadow: '0px 4px 8px rgba(244, 45, 0, 0.2)' }}>
           
            
           
            <div className="row mb-5">
                <div className="col-md-6 mb-4">
                    <img src="https://socialspike.in/wp-content/uploads/2023/07/About-Us-1.jpg" alt="About Us" className="img-fluid rounded shadow-lg" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h3 style={{ color: '#f42d00' }}>Our Mission</h3>
                    <p className="text-justify">
                        At Book Reading Inc., our mission is to create a community where book enthusiasts can come together, share their love for reading, and discover new and exciting books. We aim to provide a platform where readers can connect, engage, and be inspired.
                    </p>
                    <h3 style={{ color: '#f42d00' }}>Our Story</h3>
                    <p className="text-justify">
                        Founded in 2024, Book Reading Inc. started as a small book club and has grown into a vibrant online community. We believe in the power of books to transform lives and bring people together. Our journey began with a simple idea: to make reading more accessible and enjoyable for everyone.
                    </p>
                </div>
            </div>
            <div className="row text-center mb-5">
                <div className="col-md-4 mb-4">
                    <i className="bi bi-people-fill" style={{ fontSize: '3rem', color: '#f42d00' }}></i>
                    <h4 className="mt-3" style={{ color: '#f42d00' }}>Community</h4>
                    <p>
                        We foster a welcoming and inclusive community where readers of all backgrounds can come together and share their passion for books.
                    </p>
                </div>
                <div className="col-md-4 mb-4">
                    <i className="bi bi-book-fill" style={{ fontSize: '3rem', color: '#f42d00' }}></i>
                    <h4 className="mt-3" style={{ color: '#f42d00' }}>Diverse Collection</h4>
                    <p>
                        Our platform offers a wide range of books from various genres and authors, ensuring there's something for every reader.
                    </p>
                </div>
                <div className="col-md-4 mb-4">
                    <i className="bi bi-lightbulb-fill" style={{ fontSize: '3rem', color: '#f42d00' }}></i>
                    <h4 className="mt-3" style={{ color: '#f42d00' }}>Inspiration</h4>
                    <p>
                        We aim to inspire our readers by providing insightful book reviews, recommendations, and engaging content.
                    </p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12 mb-4">
                    <h3 className="mb-4" style={{ color: '#f42d00' }}>Meet Our Team</h3>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" />
                    <h5 style={{ color: '#f42d00' }}>Jinendra Bogahawatte</h5>
                    <p>Founder & CEO</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" />
                    <h5 style={{ color: '#f42d00' }}>Ravindu Asiri</h5>
                    <p>Head of Community</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" />
                    <h5 style={{ color: '#f42d00' }}>Mr.Priyanga</h5>
                    <p>Content Manager</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" />
                    <h5 style={{ color: '#f42d00' }}>Yasiru isuranga</h5>
                    <p>Developer</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" />
                    <h5 style={{ color: '#f42d00' }}>Chamika vishwakumara</h5>
                    <p>Developer</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" />
                    <h5 style={{ color: '#f42d00' }}>Kalpa Maduranga</h5>
                    <p>Developer</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        </div>
    <Footer />
    </>
  )
}

export default About