const mongoose = require('mongoose');
const auditSchema = mongoose.Schema({
    firstName : { type: String, required:true },
    lastName : { type: String, required:true },
    emailAddress : { type: String, required:true, unique:true },
    phoneNumber : { type: String, required:true },
    dob:{ type: String, required:true },
    homeAddress: { type: String, required:true },
    workAddress:{ type: String, required:true },
    isactive: { type: Boolean, default:true },
});

const auditModel = mongoose.model('Audits',auditSchema);

module.exports = auditModel;