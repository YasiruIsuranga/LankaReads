const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    bookdoc: { type: String, required: true }, // Add bookdoc URL field here
});

const Book = mongoose.model('Book', bookSchema);

// Cache to store books
let booksCache = null;
let booksCacheTimestamp = null;
const CACHE_DURATION = 60000; // 60 seconds

// Middleware to check if the cache is still valid
function isCacheValid() {
    return booksCache && (Date.now() - booksCacheTimestamp) < CACHE_DURATION;
}

// Route to get all books (with caching)
router.get('/books', async (req, res) => {
    try {
        if (isCacheValid()) {
            return res.json(booksCache);
        }

        const books = await Book.find(); // Fetch all books from MongoDB
        booksCache = books;
        booksCacheTimestamp = Date.now();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
});

// Route to create a new book
router.post('/books', async (req, res) => {
    try {
        const { name, image, price, category, description, bookdoc } = req.body; // Include bookdoc
        const newBook = new Book({ name, image, price, category, description, bookdoc });
        await newBook.save();
        booksCache = null; // Clear cache to reflect new data
        res.status(201).json(newBook);  // Return the created book
    } catch (error) {
        res.status(400).json({ message: 'Error creating book', error: error.message });
    }
});

// Route to get a specific book by ID
router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID format' });
    }

    try {
        const book = await Book.findById(bookId); // Find a book by ID
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);  // Return the book, including the bookdoc field
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error: error.message });
    }
});


// Route to update a book by Id
router.put('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        booksCache = null; // Clear cache to reflect updated data
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Error updating book', error: error.message });
    }
});

// Route to delete a book by ID
router.delete('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(bookId);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        booksCache = null; // Clear cache to reflect updated data
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
});

// Route to clear the books cache manually
router.post('/clear-cache', (req, res) => {
    booksCache = null;
    booksCacheTimestamp = null;
    res.json({ message: 'Cache cleared' });
});

module.exports = router;
