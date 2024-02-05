// Import the necessary modules
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  idNumber: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
      type: String,
      required: true,
  },
  sportType: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },

  cityname:{
    type:String,
    require:true,
  },
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;
