import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <>
    <Header />
    <div>
    <div className="jumbotron jumbotron-fluid text-white text-center" style={{ backgroundColor: '#f42d00', padding: '50px 0' }}>
                <div className="container">
                <img src="https://www.shutterstock.com/image-photo/email-concept-person-using-laptop-600nw-1913233225.jpg" alt="About Us" />
                    
                </div>
            </div>
         <div className="container my-5"style={{ boxShadow: '0px 10px 40px rgba(244, 45, 0, 0.2)' }}>
            <h1 className="text-center mb-4" style={{ color: '#f42d00' }}>Contact Us</h1>
            <div className="row ms-3">
                <div className="col-md-6">
                    <h3 className="mb-3">Get in Touch</h3>
                    <p className="mb-4">Feel free to reach out to us for any inquiries, suggestions, or feedback. We would love to hear from you!</p>
                    <form>
  <div className="mb-4">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
  </div>
  <div className="mb-4">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <div className="input-group">
      <select className="form-select" style={{ maxWidth: '150px', marginRight: '10px' }}>
        <option value="+1">USA (+1)</option>
        <option value="+44">UK (+44)</option>
        <option value="+91">India (+91)</option>
        <option value="+94">Sri Lanka (+94)</option>
        <option value="+61">Australia (+61)</option>
        <option value="+81">Japan (+81)</option>
        <option value="+49">Germany (+49)</option>
        
      </select>
      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
    </div>
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
  </div>
  <button type="submit" className="btn btn1">Submit</button>
</form>
<br />
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <h3 className="mb-3 text-center">Our Location</h3>
                    <p className="text-center">We are located at:</p>
                    <address className="mb-4 text-center">
                        <strong>Book Reading Inc.</strong><br />
                        123 Book Street<br />
                        Reading City, RD 12345<br />
                        Email: contact@bookreading.com<br />
                        Phone: (123) 456-7890
                    </address>
                    <div className="my-4 text-center">
                        <h4>Follow Us</h4>
                        <div>
                            <a href="#" className="text-decoration-none text-primary me-3">
                                <i className="bi bi-facebook" style={{ fontSize: '2rem' }}></i>
                            </a>
                            <a href="#" className="text-decoration-none text-info me-3">
                                <i className="bi bi-twitter" style={{ fontSize: '2rem' }}></i>
                            </a>
                            <a href="#" className="text-decoration-none text-danger me-3">
                                <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
                            </a>
                            <a href="#" className="text-decoration-none text-danger me-3">
                                <i className="bi bi-youtube" style={{ fontSize: '2rem' }}></i>
                            </a>
                        </div>
                    </div>
                    <img src="data:image/jpeg;base64,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" alt="Location Map" className="img-fluid rounded shadow" />
                </div>
                <br />
            </div>
        </div></div>
    <Footer />
    </>
  )
}

export default Contact