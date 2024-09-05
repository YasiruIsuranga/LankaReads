const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
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

// Route to get all books
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

// Route to get a specific book by ID
router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;

    // Validate the ID before querying the database
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID format' });
    }

    try {
        const book = await Book.findById(bookId); // Find a book by ID
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error: error.message });
    }
});

// Route to clear the books cache manually
router.post('/clear-cache', (req, res) => {
    booksCache = null;
    booksCacheTimestamp = null;
    res.json({ message: 'Cache cleared' });
});

module.exports = router;
