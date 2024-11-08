const express = require("express");
const router = express.Router();

const paymentsModel = require('../models/payments.model');
router.get("/",function(req,res,next) {
    res.send('response with a resources');
});


module.exports = router;