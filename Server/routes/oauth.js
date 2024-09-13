var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library');
const fetch = require('node-fetch');
const User = require('../models/User'); 

async function getUserData(access_token){
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
    const data = await response.json();
    return data;
    // console.log('data',data);
}

// GET Home page
router.get('/', async function(req, res, next) {
    const code = req.query.code;
    try{
        const redirectUrl = 'http://127.0.0.1:5000/oauth';
        const oAuth2Client = new OAuth2Client (
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );
        const tokenResponse = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokenResponse.tokens);

        // Get user information from Google API
        const userInfo = await getUserData(oAuth2Client.credentials.access_token);
        console.log(userInfo);

        // Check if email exists
        if (!userInfo.email) {
            return res.status(400).send('Email not found in Google user profile');
        }

        // Check if user already exists in database (by googleId or email)
        let user = await User.findOne({ googleId: userInfo.sub });
        if (!user) {
            // If no Google ID, check if email exists (for users who sign up traditionally first)
            user = await User.findOne({ email: userInfo.email });

            if (user) {
                // If email exists, update the user with googleId
                user.googleId = userInfo.sub;
            } else {
                // If no user exists, create a new one
                user = new User({
                    googleId: userInfo.sub,
                    name: userInfo.name,
                    email: userInfo.email,
                    password: null // No password for OAuth users
                });
            }
            await user.save();
        }

        // Redirect the user to the homepage (your frontend app)
        res.redirect(`http://localhost:5173/home?userId=${user._id}&name=${user.name}&email=${user.email}`); // Change this URL to your actual home page
    } catch (err) {
        console.error('Error during Google authentication:', err);
        res.status(500).send('Authentication failed');
    }

});

module.exports = router;