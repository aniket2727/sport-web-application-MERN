const express = require('express');
const router = express.Router();
const getimagecontroller = require('../controller/sportImage.controller');

router.get('/getimage', getimagecontroller);

module.exports = router;
