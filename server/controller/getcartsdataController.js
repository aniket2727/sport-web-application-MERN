





// cartsController.js
const cartsdata = require('../database/cartsSchema');

const getCartDataByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Fetch cart data from the database based on the provided email
    const cartData = await cartsdata.find({ email: email });

    return res.status(200).json({ data: cartData });
  } catch (error) {
    console.error('Error getting cart data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports =  getCartDataByEmail 
