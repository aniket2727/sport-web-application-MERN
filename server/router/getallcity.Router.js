



const express = require('express');
const router = express.Router();
const cityController = require('../controller/getallcity.Controller');

// Get all cities and their shops
router.get('/getallcitydata', cityController.getAllCities);

// Get details of a specific city by cityName
router.get('/cities/:cityName', cityController.getCityDetails);

module.exports = router;
