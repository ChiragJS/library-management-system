const express = require ('express');
const router = express.Router();
const {Books} = require ('../db');

router.post('/',async (req,res)=>{
    try{
    const newBook = await Books.create(req.body);
    res.json({message: "Book created succefully"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});//creates a new book
router.get('/', async (req,res)=>{
    try{
    const books = await Books.find();
    res.json({message :"Showing all the books",books});
    }
    catch(err){
        res.status(500).json({"error": err.message});
    }
});//shows all the books
router.get('/:bookId', async(req,res)=>{
    const bookId = req.params.bookId;
    try{
    const book = await Books.findById(bookId);
    res.json(book);
    }
    catch(err){
        res.status(500).json({"error":err.message});
    }
});//shows a particular book
router.put('/:bookId', async (req,res)=>{
    const bookId =req.params.bookId;
   
    try{
        const book = await Books.findByIdAndUpdate(bookId,req.body, {new : true});
        res.json(book);
    }
    catch(err){
        res.status(500).json({"error" : err.message});
    }
});
router.delete('/:bookId', async (req,res)=>{
    const bookId = req.params.bookId;
    try{
        const book = await Books.findByIdAndDelete(bookId);
        res.json(book);
    }
    catch(err){
        res.status(500).json({"error": err.message})
    }
});
module.exports= router;