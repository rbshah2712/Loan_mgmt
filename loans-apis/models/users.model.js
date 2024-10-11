const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName : { type: String, required:true },
    lastName : { type: String, required:true },
    emailAddress : { type : String, required:true, unique : true },
    phoneNumber : { type: String },
    dob: { type: Date },
    department:{ type: String },
    role: { type: String, required:true },
    designation: { type: String},
    isactive: { type: Boolean, default:true },
},
{ collection: 'users', strict: false });

const userModel = mongoose.model('Users',userSchema);

module.exports = userModel;