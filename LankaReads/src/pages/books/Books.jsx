import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ScrollTop from '../../components/Scroll-top/ScrollTop';
import Footer from '../../components/Footer/footer';
import BookContainer from '../../components/BookContainter/BookContainer';
import './Books.css';
import axios from 'axios';

function Books() {
  const [placeholder, setPlaceholder] = useState('Search Books Here');
  const [buttonText, setButtonText] = useState('Select here');
  const [searchType, setSearchType] = useState(''); // Track search type: 'name' or 'category'
  const [searchInput, setSearchInput] = useState(''); // Track search input
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch books data
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      }
    };

    fetchBooks();
  }, []);

  const handleSelect = (option) => {
    if (option === 'name') {
      setPlaceholder('Search by Book Name');
      setButtonText('Book Name');
      setSearchType('name');
    } else if (option === 'category') {
      setPlaceholder('Search by Category');
      setButtonText('Category');
      setSearchType('category');
    }
  };

  const handleSearch = () => {
    if (searchType === 'name') {
      // Filter books by name
      const filtered = books.filter(book =>
        book.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredBooks(filtered.length > 0 ? filtered : []);
    } else if (searchType === 'category') {
      // Filter books by category
      const filtered = books.filter(book =>
        book.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredBooks(filtered.length > 0 ? filtered : []);
    }
  };

  return (
    <>
      <Header />
      <div className='container-fluid book-fullpage'>
        <div className='row justify-content-center mt-5'>
          <div className='col-8'>
            <div className="input-group mb-3">
              <div className="input-group-prepend mt-3">
                <div className="dropdown">
                  <button
                    className="btn btn-danger dropdown-toggle me-3 catogary-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {buttonText}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelect('name')}>Search by Name</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelect('category')}>Search by Category</a></li>
                  </ul>
                </div>
              </div>
              <input
                type="text"
                className="form-control mt-3 booksearchinput"
                style={{ borderRadius: '5px' }}
                placeholder={placeholder}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary search-btn2 mt-3"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            {filteredBooks.length === 0 && searchInput && (
              <p className="text-center">Sorry, currently don't have any books matching your search criteria.</p>
            )}
          </div>
          <BookContainer books={filteredBooks} />
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default Books;
