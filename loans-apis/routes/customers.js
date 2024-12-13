const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();

const customerModel = require('../models/customers.model');

/*GET All Customers*/
router.get("/list",async function(req,res,next) {
    try{
        let result = await customerModel.find();
        if(result.length > 0){
            res.status(200).json({message: "customers fetched successfully!",recordCound:result.length,CustomerDetails:result});
        } else{
            res.status(404).json({message: "No Records Found!!"}); 
        }
        } catch (error){
        res.status(500).json({message:'Unable to find customer'});
      }
});

/*GET Specific Customer*/
router.get("/view",async function(req,res,next) {
    const customerId = req.query.customerId;
        let result = await customerModel.findById(customerId)
        .then((result) => {
            if(result){
            res.status(200).json({message: "customer fetched successfully!",CustomerDetails:result});
            }else{
            res.status(404).json({message: "customer Not Found!"}); 
        }
      })
      .catch(error => {
        res.status(500).json({
        message:"Fetching customer failed!"
        });
    });
});
    
/*Create New Customers*/
router.post("/add",function(req,res,next) {
  try{
    let customerObj =  new customerModel({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailAddress : req.body.emailAddress,
        phoneNumber : req.body.phoneNumber,
        dob:req.body.dob,
        homeAddress:req.body.homeAddress,
        workAddress:req.body.workAddress,
        isactive: req.body.isactive,
    });
    customerObj.save()
    
    .then((result) => {
      if (result) {
        console.log(result)
        res.status(200).json({ message: 'Customer saved successfully!',customerDetails: customerObj });
      } else {
        res.status(401).json({ message: "Record not found or duplicate record" });
      }
      })
      .catch((error) => {
        if (error.code === 11000) {
          // Handle duplicate key error (code 11000)
          res.status(409).json({ message: 'EmailAddress already exists' });
      } else {
         res.status(500).json(error);
        }
      });
  }catch(e){
        // Handle duplicate key error (code 11000)
        res.status(500).json(e);

  }
});


/*Update an existing Customers*/
router.put("/update", function(req,res,next) {
    try {
    const customerId = req.body.customerId;
    let customerObj =  {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailAddress : req.body.emailAddress,
        phoneNumber : req.body.phoneNumber,
        dob:req.body.dob,
        homeAddress:req.body.homeAddress,
        workAddress:req.body.workAddress,
        isactive: req.body.isactive
    };
         customerModel.findByIdAndUpdate({_id:customerId},{$set:customerObj}, { new: true })
        .then((result) => {
            if (result) {
                res.status(200).json({ message: "customer updated successfully!" });
              } else {
                res.status(401).json({ message: "Record not found or duplicate record" });
              }
            })
            .catch(error => {
              res.status(500).json({
                message:"Couldn't update customer!"
              })
            })
      } catch (error) {
        res.status(401).json({ message: 'Customer Not found!!'});
      }
});

/*Delete an existing Customers*/
router.delete("/delete",function(req,res,next) {
    try {
         const customerId = req.query.customerId;
         customerModel.findByIdAndDelete(customerId)
         .then((result) => {
            if (result) {
                res.status(200).json({ message: "customer deleted successfully!" });
              } else {
                res.status(401).json({ message: "Record not found or duplicate record" });
              }
            })
            .catch(error => {
              res.status(500).json({
                message:"Couldn't delete customer!"
              })
            })
      } catch (error) {
        res.status(401).json({ message: 'Customer Not found!!'});
      }
});

/*Delete Multiple existing Customers*/
router.delete("/delete-multiple",function(req,res,next) {
    try {
         customerModel.deleteMany({'firstName':'Tina'})
         .then((result) => {
            if (result) {
                res.status(200).json({ message: "customer deleted successfully!" });
              } else {
                res.status(401).json({ message: "Record not found or duplicate record" });
              }
            })
            .catch(error => {
              res.status(500).json({
                message:"Couldn't delete customer!"
              })
            })
      } catch (error) {
        res.status(401).json({ message: 'Customer Not found!!'});
      }
});

/*Search an existing Customers*/
router.get("/search",function(req,res,next) {
    res.send('response with a resources');
});


module.exports = router;