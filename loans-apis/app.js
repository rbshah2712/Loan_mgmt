var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const cors = require('cors');
const indexRoutes = require("./routes/index");
const customersRoutes = require("./routes/customers");
const loansRoutes = require("./routes/loans");
const paymentsRoutes = require("./routes/payments");
const invoicesRoutes = require("./routes/invoices");
const settingsRoutes = require("./routes/settings");
const auditRoutes = require("./routes/audits");
const usersRoutes = require("./routes/users");

//Connect database with mongoose
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost/LoanManager';
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
app.use('/',indexRoutes);
app.use('/users',usersRoutes);
app.use('/customers',customersRoutes);

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

module.exports = app;

