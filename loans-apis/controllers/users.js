const User = require('../models/users.model');

/* GET users listing. */
exports.getUsers = (req, res, next) => {

  const userQuery = User.find();
  
  userQuery.then(documents => {
    fetchedUsers = documents;
 
  })
  .then(count => {
    if (res.rows.length === 0) {
      res.status(200).json({
        message:"Fetching user failed!"
      })
    }else {
      res.status(200).json({
        message: "Users fetched successfully!",
        users: fetchedUsers
      });
    } 
    })

    .catch(error => {
      res.status(500).json({
        message:"Fetching user failed!"
      })
    })
  }


  exports.createUser = (req, res, next) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName : req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      department: req.body.department,
      role: req.body.role,
      designation: req.body.designation,
      isactive: req.body.isactive
    });
    user.save().then(createdUser => {
      res.status(201).json({
        message: "User added successfully",
        user: { 
          createdUser,
          id: createdUser._id
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message:"Creating user failed!"
      })
    })
  }
