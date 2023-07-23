const mongoose= require('mongoose');
const bookSchema = new mongoose.Schema({
    title : String,
    author : String,
    isbn : String ,
    publisher : String,
    quantity : Number
});
const memberSchema = new mongoose.Schema({
    name :  String,
    contact : String,
    membershipDetails : String,
    outstandingDebt : { type : Number,default : 0 }
});
const Books = mongoose.model('Books',bookSchema);
const Members = mongoose.model('Members',memberSchema);
const transactionSchema = new mongoose.Schema({
        book : {type : mongoose.Schema.Types.ObjectId, ref : Books},
        member :{type : mongoose.Schema.Types.ObjectId, ref : Members},
        dueDate : {type : Date},
        returnDate : {type : Date}
});

const Transaction = mongoose.model('Transaction',transactionSchema);

module.exports={
    Books,
    Members,
    Transaction
};