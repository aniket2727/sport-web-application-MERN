// cartsController.js
const cartsdata = require('../database/cartsSchema');

const setcartdata = async (req, res) => {
  try {
    const { productEmail, productName, productCaption, productPrice, productId, productImage } = req.body;

    // Validate required fields
    if (!productEmail || !productName || !productCaption || !productPrice || !productId || !productImage) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create a new cart item using the cartsdata schema
    const newCartItem = new cartsdata({
      email: productEmail,
      name: productName,
      caption: productCaption,
      price: productPrice,
      productId: productId,
      productImage: productImage
    });

    // Save the cart item to the database
    const savedCartItem = await newCartItem.save();

    return res.status(201).json({ message: 'Cart item saved successfully', data: savedCartItem });
  } catch (error) {
    console.error('Error setting cart data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { setcartdata };
