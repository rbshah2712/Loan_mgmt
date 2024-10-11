var express = require('express');
var router = express.Router();
const usersModel = require('../models/users.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendStatus(200).send();
});

