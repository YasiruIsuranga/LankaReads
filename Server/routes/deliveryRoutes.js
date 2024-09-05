// routes/delivery.js (or similar)

const express = require('express');
const router = express.Router();
const Delivery = require('../models/Delivery');

// POST endpoint to handle delivery data
router.post('/api/delivery', async (req, res) => {
  try {
    const { name, email, phone, address, cartItems, totalPrice } = req.body;

    // Validate the presence of required fields
    if (!name || !email || !phone || !address || !cartItems || totalPrice === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new delivery entry
    const newDelivery = new Delivery({
      name,
      email,
      phone,
      address,
      cartItems, // cartItems should only include name and price
      totalPrice,
    });

    // Save to the database
    await newDelivery.save();

    // Send confirmation email (optional)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Delivery Confirmation',
      text: `Dear ${name},\n\nYour delivery order has been received. Details:\n\n${cartItems.map(item => `Book: ${item.name}\nPrice: ${item.price}\n`).join('')}\nTotal Price: ${totalPrice}\nAddress: ${address}\n\nThank you for your order!`,
    };

    // Uncomment if using a mail transporter
    // await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Delivery details submitted successfully!' });
  } catch (error) {
    console.error('Error submitting delivery details:', error);
    res.status(500).json({ message: 'Failed to submit delivery details.' });
  }
});

module.exports = router;
