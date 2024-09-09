// models/Delivery.js

const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  cartItems: [{
    name: String,
    price: Number,
  }],
  totalPrice: Number,
}, { timestamps: true });

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
