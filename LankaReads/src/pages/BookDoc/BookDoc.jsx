import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebaseConfig'; // Import Firebase storage
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
  const bookdocPath = queryParams.get('bookdoc'); // Path to PDF in Firebase Storage
  
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  // Fetch the PDF URL from Firebase Storage
  useEffect(() => {
    if (bookdocPath) {
      const fetchPdfUrl = async () => {
        try {
          // Reference to the PDF file in Firebase Storage
          const pdfRef = ref(storage, bookdocPath); 
          const url = await getDownloadURL(pdfRef);
          setPdfUrl(url); // Set the fetched PDF URL
        } catch (error) {
          console.error("Error fetching PDF URL: ", error);
        } finally {
          setLoading(false); // Stop loading after the attempt
        }
      };
      fetchPdfUrl();
    } else {
      setLoading(false);
    }
  }, [bookdocPath]);

  // Function to handle PDF download
  const handleDownload = () => {
    if (pdfUrl) {
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = `${name}.pdf`; // Download with a name
      a.target = '_blank'; // Open in a new tab
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert('PDF document not available.');
    }
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
          <p><strong>book pdf url:</strong> ${bookdocPath}</p>

          {/* Show loading state */}
          {loading ? (
            <p>Loading PDF...</p>
          ) : pdfUrl ? (
            <>
              <p><strong>Book Document URL:</strong> <a href={pdfUrl} target="_blank" rel="noopener noreferrer">View PDF</a></p>
              <button className="btn btn-primary downpdfbtn" onClick={handleDownload}>Download Book PDF</button>
            </>
          ) : (
            <p>PDF document not available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDoc;
