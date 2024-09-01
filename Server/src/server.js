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
    email: { type: String, unique: true }, // Ensure email uniqueness
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
        // Check if the user is already subscribed
        const existingSubscription = await Subscription.findOne({ email });
        if (existingSubscription) {
            return res.status(400).json({ message: 'Email is already subscribed.' });
        }

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

// Route to handle unsubscription requests
app.post('/unsubscribe', async (req, res) => {
    const { email } = req.body;

    try {
        // Find and delete the subscription from MongoDB
        const deletedSubscription = await Subscription.findOneAndDelete({ email });

        if (!deletedSubscription) {
            return res.status(404).json({ message: 'Email not found. Unsubscription failed.' });
        }

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'You have unsubscribed',
            text: 'You have successfully unsubscribed from our updates.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email sending error:', error);
                return res.status(500).json({ message: 'Unsubscription succeeded, but email failed to send.' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).json({ message: 'Unsubscription successful! Confirmation email sent.' });
            }
        });
    } catch (error) {
        console.error('Unsubscription error:', error);
        return res.status(500).json({ message: 'Unsubscription failed.' });
    }
});

// Route to create a checkout session with Stripe
app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    try {
        // Ensure BASE_URL is defined
        const baseUrl = process.env.BASE_URL;
        if (!baseUrl) {
            throw new Error('BASE_URL is not defined in environment variables.');
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Book Purchase',
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${baseUrl}/`,
            cancel_url: `${baseUrl}/`,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Stripe checkout session error:', error);
        res.status(500).json({ message: 'Failed to create checkout session.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
