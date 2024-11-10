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
    const userId = req.query.userId;
        let result = await customerModel.findById(userId)
        .then(res => {
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

    let customerObj =  new customerModel({
        firstName : 'Veer',
        lastName : 'Shah',
        emailAddress : 'veershah@gmail.com',
        phoneNumber : '4694347443',
        dob:'2021-05-18',
        homeAddress:'4245 cedar bridge walk,suwanee,GA',
        workAddress:'4245 cedar bridge walk,suwanee,GA',
        isactive: true
    });
    customerObj.save()
    .then(() => {
        res.status(201).json({ message: 'Customer saved successfully!',customerDetails: customerObj });
      })
      .catch((error) => {
        res.status(500).json({ message: 'Unable to add customer' });
      });
});



/*Update an existing Customers*/
router.put("/update", async function(req,res,next) {
   
    const customerId = req.params.customerId;
    let customerObj =  {
        firstName : 'Tina',
        lastName : 'Shah',
        emailAddress : 'tinashah@gmail.com',
        phoneNumber : '4694345443',
        dob:'2021-06-18',
        homeAddress:'3659 cedar bridge walk,suwanee,GA',
        workAddress:'56955 cedar bridge walk,suwanee,GA',
        isactive: true
    };
    const updatedResult = await customerModel.findByIdAndUpdate(customerId,customerObj)
    .then(updatedResult => {
        console.log('inside');
        console.log(updatedResult);
        if(updatedResult){
        res.status(200).json({message: "customer fetched successfully!",CustomerDetails:updatedResult});
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

/*Delete an existing Customers*/
router.delete("/delete",function(req,res,next) {
    res.send('response with a resources');
});

/*Search an existing Customers*/
router.get("/search",function(req,res,next) {
    res.send('response with a resources');
});


module.exports = router;