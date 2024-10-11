var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//Connect database with mongoose
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://rsanghvi2712:ueVpNig7Z78tCNfH@cluster0.owsw8yh.mongodb.net/Loanmanager';
mongoose.connect(mongoURI)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(port, () => {
      console.log(`API is listening on port`,port);
    });
});

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("API is UP");
});



