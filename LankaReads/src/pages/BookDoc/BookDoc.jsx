import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookDoc.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';

const BookDoc = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const bookId = queryParams.get('bookId');
  const name = queryParams.get('name');
  const price = queryParams.get('price');
  const image = queryParams.get('image');

  const handleDownload = () => {
    const billContent = `
      Book Name: ${name}
      Price: $${price}
      Image URL: ${image}
    `;
    const blob = new Blob([billContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bill.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Header />
      <div className="bill-page">
        <h1>Book Document Details</h1>
        <div className="bill-content">
          {image && <img src={image} alt={name} className="bill-image" />}
          <p><strong>Book Name:</strong> {name}</p>
          <p><strong>Price:</strong> ${price}</p>
          <button className="btn btn-primary" onClick={handleDownload}>Download Book PDF</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDoc;
