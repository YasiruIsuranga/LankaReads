const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Initialize Stripe with the secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err.message));

// Define the Subscription schema and model
const subscriptionSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Import and use book routes
const bookRoutes = require('../routes/book'); // Adjust path as needed
app.use('/api', bookRoutes); // Adjust this path as needed

// Route to handle subscription requests
app.post('/subscribe', async (req, res) => {
    const { name, email } = req.body;

    try {
        // Save subscription details to MongoDB
        const newSubscription = new Subscription({ name, email });
        await newSubscription.save();

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank You for Subscribing!',
            text: `Dear ${name},\n\nThank you for subscribing to our updates! We will keep you informed.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email sending error:', error);
                return res.status(500).json({ message: 'Subscription succeeded, but email failed to send.' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).json({ message: 'Subscription successful! Confirmation email sent.' });
            }
        });
    } catch (error) {
        console.error('Subscription error:', error);
        return res.status(500).json({ message: 'Subscription failed.' });
    }
});

// Route to create a Stripe checkout session
app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    try {
        // Create a new Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Sample Product', // Update this with your actual product name
                    },
                    unit_amount: amount, // Amount in cents
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:5173/', // Update with your success URL
            cancel_url: 'http://localhost:5173/',   // Update with your cancel URL
        });

        // Return the session ID and URL to the client
        res.json({ id: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe checkout session error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the Express server with dynamic port selection
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Handle potential 'EADDRINUSE' error and select another port
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
        server.listen(0, () => {
            const newPort = server.address().port;
            console.log(`Server is running on a new port http://localhost:${newPort}`);
        });
    } else {
        console.error('Server error:', err);
    }
});
