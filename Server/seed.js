const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book'); // Adjust the path if needed

// Load environment variables
dotenv.config();

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err.message));

// Dummy data for books
const books = [
    {
        name: 'The Great Gatsby',
        image: 'https://via.placeholder.com/150x230.png?text=The+Great+Gatsby',
        price: 10.99,
        category: 'Historic',
        description: 'A novel written by American author F. Scott Fitzgerald.',
    },
    {
        name: 'To Kill a Mockingbird',
        image: 'https://via.placeholder.com/150x230.png?text=To+Kill+a+Mockingbird',
        price: 8.99,
        category: 'Classic',
        description: 'A novel by Harper Lee published in 1960.',
    },
    {
        name: '1984',
        image: 'https://via.placeholder.com/150x230.png?text=1984',
        price: 12.99,
        category: 'Historic',
        description: 'A novel by George Orwell published in 1949.',
    },
    {
        name: 'Moby Dick',
        image: 'https://via.placeholder.com/150x230.png?text=Moby+Dick',
        price: 9.99,
        category: 'Novel',
        description: 'A novel by Herman Melville published in 1851.',
    },
    {
        name: 'War and Peace',
        image: 'https://via.placeholder.com/150x230.png?text=War+and+Peace',
        price: 14.99,
        category: 'Fiction',
        description: 'A novel by Leo Tolstoy published from 1865 to 1869.',
    },
    // New books with category "Fiction"
    {
        name: 'The Catcher in the Rye',
        image: 'https://via.placeholder.com/150x230.png?text=The+Catcher+in+the+Rye',
        price: 11.99,
        category: 'Fiction',
        description: 'A novel by J.D. Salinger published in 1951.',
    },
    {
        name: 'Brave New World',
        image: 'https://via.placeholder.com/150x230.png?text=Brave+New+World',
        price: 10.49,
        category: 'Fiction',
        description: 'A novel by Aldous Huxley published in 1932.',
    },
    {
        name: 'The Road',
        image: 'https://via.placeholder.com/150x230.png?text=The+Road',
        price: 13.49,
        category: 'Fiction',
        description: 'A novel by Cormac McCarthy published in 2006.',
    },
    {
        name: 'Life of Pi',
        image: 'https://via.placeholder.com/150x230.png?text=Life+of+Pi',
        price: 12.99,
        category: 'Fiction',
        description: 'A novel by Yann Martel published in 2001.',
    },
    {
        name: 'The Hobbit',
        image: 'https://via.placeholder.com/150x230.png?text=The+Hobbit',
        price: 9.99,
        category: 'Fiction',
        description: 'A novel by J.R.R. Tolkien published in 1937.',
    },
    {
        name: 'Dune',
        image: 'https://via.placeholder.com/150x230.png?text=Dune',
        price: 14.49,
        category: 'Fiction',
        description: 'A science fiction novel by Frank Herbert published in 1965.',
    },
];

// Function to insert dummy data
const seedDatabase = async () => {
    try {
        await Book.deleteMany({}); // Clear existing data
        await Book.insertMany(books); // Insert dummy data
        console.log('Database seeded successfully!');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

seedDatabase();
