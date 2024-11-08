const express = require("express");
const router = express.Router();

const loansModel = require('../models/loans.model');
router.get("/",function(req,res,next) {
    res.send('response with a resources');
});


module.exports = router;