const Customer = require('../models/customers.model');

/* GET customers listing. */
exports.getUsers = (req, res, next) => {

  const customerQuery = Customer.find();
  
  customerQuery.then(documents => {
    fetchedCustomers = documents;
 
  })
  .then(count => {
    if (res.rows.length === 0) {
      res.status(200).json({
        message:"Fetching customer failed!"
      })
    }else {
      res.status(200).json({
        message:"Customers fetched successfully!",
        customers: fetchedCustomers
      });
    } 
    })

    .catch(error => {
      res.status(500).json({
        message:"Fetching user failed!"
      })
    })
  }


  exports.createCustomer = (req, res, next) => {
    const user = new Customer({
      firstName: req.body.firstName,
      lastName : req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      homeAddress: req.body.homeAddress,
      workAddress: req.body.workAddress,
      isactive: req.body.isactive
    });
    customer.save().then(createdCustomer => {
      res.status(201).json({
        message: "Customer added successfully",
        customer: { 
          createdCustomer,
          id: createdCustomer._id
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message:"Creating customer failed!"
      })
    })
  }
