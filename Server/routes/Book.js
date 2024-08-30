const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: String,
    description: String,
});

const Book = mongoose.model('Book', bookSchema);

// Route to get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from MongoDB
        console.log('Books fetched:', books);
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Error fetching books' });
    }
});

// Route to get a specific book by ID
router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    console.log('Fetching book with ID:', bookId);

    // Validate the ID before querying the database
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID format' });
    }

    try {
        const book = await Book.findById(bookId); // Find a book by ID
        if (!book) return res.status(404).json({ message: 'Book not found' });
        console.log('Book fetched:', book);
        res.json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Error fetching book' });
    }
});

module.exports = router;
