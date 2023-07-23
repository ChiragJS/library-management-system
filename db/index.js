const mongoose= require('mongoose');
const bookSchema = new mongoose.Schema({

});
const memberSchema = new mongoose.Schema({

});


const Books = mongoose.model('Books',bookSchema);
const Members = mongoose.model('Members',memberSchema);
module.exports={
    Books,
    Members
};