const express = require("express");
const router = express.Router();

const customerModel = require('../models/customers.model');
router.get("/",function(req,res,next) {
    res.send('response with a resources');
});


module.exports = router;