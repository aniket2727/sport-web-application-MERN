const express = require('express');
const router = express.Router();
const getproductinfocontroller = require('../controller/getproductinfo.Contoller');

router.get('/getallproduct', getproductinfocontroller);

module.exports = router;
