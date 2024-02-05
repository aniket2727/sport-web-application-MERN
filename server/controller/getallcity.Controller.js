


const City = require('../database/cityandshopSchema');

// Get all cities and their shops
const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get details of a specific city by cityName
const getCityDetails = async (req, res) => {
  const { cityName } = req.params;
  try {
    const city = await City.findOne({ cityName });
    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }
    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllCities,
  getCityDetails,
};
