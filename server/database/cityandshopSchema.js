


const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  // Other shop-related fields can be added as needed
});

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
    unique: true,
  },
  shops: [shopSchema], // Embed the shop schema as an array within the city schema
});

const City = mongoose.model('City', citySchema);

module.exports = City;
