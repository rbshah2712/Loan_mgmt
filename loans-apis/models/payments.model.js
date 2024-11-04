const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    firstName : { type: String, required:true },
    lastName : { type: String, required:true },
    emailAddress : { type: String, required:true },
    phoneNumber : { type: Number, required:true },
    creditcardNumber: { type: String, required:true },
    creditcardexpiry:{ type: Date, required:true },
    paymentmethod:{ type: String, required:true },
});

const paymentsModel = mongoose.model('Payments',paymentSchema);

module.exports = paymentsModel;