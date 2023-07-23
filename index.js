const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const membersRouter= require ('./routes/members');
const booksRouter = require ('./routes/books');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/members',membersRouter);
app.use('/books',booksRouter);
mongoose.connect("mongodb://127.0.0.1:27017/LMS", { useNewUrlParser: true, useUnifiedTopology: true, dbName:"LMS" });
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});