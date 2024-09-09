const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

// Initialize OAuth2Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Registration handler
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        const token = generateToken(newUser._id);
        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login handler
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);
        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Google Login handler
exports.googleLoginUser = async (req, res) => {
    const { tokenId } = req.body;

    try {
        // Verify the Google token
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const { email, name, picture } = ticket.getPayload();

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (!user) {
            // If user doesn't exist, create a new user
            user = new User({
                name,
                email,
                password: '',  // No password required for Google login
                googleLogin: true,  // Mark user as Google login user
                profilePicture: picture  // Optionally save profile picture
            });
            await user.save();
        }

        // Generate JWT token
        const token = generateToken(user._id);
        
        res.status(200).json({ message: 'Google login successful', token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Google login failed. Try again.' });
    }
};
