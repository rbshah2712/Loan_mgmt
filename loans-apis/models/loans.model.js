const mongoose = require('mongoose');
const loanSchema = mongoose.Schema({
    loanName : { type: String, required:true },
    loanType : { type: String, required:true },
    loanAmount : { type: Number, required:true },
    loanIssueDate : { type: Date, required:true },
    loanStatus: { type: String, required:true },
});

const loanModel = mongoose.model('Loans',loanSchema);

module.exports = loanModel;