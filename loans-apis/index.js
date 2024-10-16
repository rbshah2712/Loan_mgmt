var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require("./routes/users");


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
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept,Authorization");
  res.setHeader("Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  next();
});


app.get("/", (req, res) => {
  res.send("API is UP");
});

app.use("/api/user",userRoutes);

module.exports = app;

