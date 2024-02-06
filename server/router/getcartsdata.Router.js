



// cartsRoutes.js
const express = require('express');
const router = express.Router();
const  getCartDataByEmail  = require('../controller/getcartsdataController');

router.post('/getcartData', getCartDataByEmail);

module.exports = router;
