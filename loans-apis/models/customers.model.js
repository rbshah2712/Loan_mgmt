const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    firstName : { type: String, required:true },
    lastName : { type: String, required:true },
    emailAddress : { type: String, required:true, unique:true },
    phoneNumber : { type: String, required:true },
    dob:{ type: String, required:true },
    homeAddress: { type: String, required:true },
    workAddress:{ type: String, required:true },
    isactive: { type: Boolean, default:true },
    createdAt:{type: Date,default:Date.now}
});

const customerModel = mongoose.model('Customers',customerSchema);

module.exports = customerModel;