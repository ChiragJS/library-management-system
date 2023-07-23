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
module.exports={
    Books,
    Members
};