import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollTop from '../../components/Scroll-top/ScrollTop'

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
                    <img src="https://media.licdn.com/dms/image/C5603AQEgD1od1hmy_g/profile-displayphoto-shrink_800_800/0/1639229911241?e=1727913600&v=beta&t=9d3lkq1bmrkwZUIJtc-azjOR1RknBVJPd9m9Nbg1fBw" alt="Team Member" className="rounded-circle mb-3 shadow-lg"
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
                    <h5 style={{ color: '#f42d00' }}>Jinendra Bogahawatte</h5>
                    <p>Founder & CEO</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/416966742_1388778555155578_6637920395080445658_n.jpg?ccb=11-4&oh=01_Q5AaIH-9DQFcWVVqSa6ap4m54Bn2twcJIGzlm9ND1gTgXcBf&oe=66B95769&_nc_sid=e6ed6c&_nc_cat=107 " alt="Team Member" className="rounded-circle mb-3 shadow-lg" 
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}/>
                    <h5 style={{ color: '#f42d00' }}>Ravindu Asiri</h5>
                    <p>Head of Community</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://via.placeholder.com/200" alt="Team Member" className="rounded-circle mb-3 shadow-lg" 
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}/>
                    <h5 style={{ color: '#f42d00' }}>Mr.Priyanga</h5>
                    <p>Content Manager</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://media.licdn.com/dms/image/D5635AQFvdFJAXMRrFg/profile-framedphoto-shrink_800_800/0/1695889497875?e=1723176000&v=beta&t=3OuPYekEd53O3Zr7Z_dAt1-oD2dgoxOPT70me4RZ1gw" alt="Team Member" className="rounded-circle mb-3 shadow-lg" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
                    <h5 style={{ color: '#f42d00' }}>Yasiru isuranga</h5>
                    <p>Developer</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/432125538_427989870217862_2926967102665917507_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIM1M9gya_cxl2tp9D-DruorBOZBqg_QX9zmrAL9e4wak&oe=66B984FA&_nc_sid=e6ed6c&_nc_cat=102" alt="Team Member" className="rounded-circle mb-3 shadow-lg" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
                    <h5 style={{ color: '#f42d00' }}>Chamika vishwakumara</h5>
                    <p>Developer</p>
                    <div>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-decoration-none mx-2" style={{ color: '#f42d00' }}><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <img src="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/368231961_283393191302369_5421438434990260938_n.jpg?ccb=11-4&oh=01_Q5AaIA0KTEMFR8myUG0Kc3itY96tckvxLaNzilC6D_Gq2mM1&oe=66B95352&_nc_sid=e6ed6c&_nc_cat=110" alt="Team Member" className="rounded-circle mb-3 shadow-lg" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
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
        <ScrollTop/>
    <Footer />
    </>
  )
}

export default About