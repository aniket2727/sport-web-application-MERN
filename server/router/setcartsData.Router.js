



const express = require('express');
const router = express.Router();
const { setcartdata } = require('../controller/setcartsdata.Controller');

router.post('/setcartdata', setcartdata);

module.exports = router;
