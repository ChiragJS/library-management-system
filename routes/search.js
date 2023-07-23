const express = require ('express');
const router = express.Router();
const {Books} = require ('../db');

router.get('/',async( req,res)=>{
    const {query} = req.query;
    try{
        const books = await Books.find({
            $or:[
                {title :{$regex: query, $options: 'i'}},
                {author : {$regex: query, $options: 'i'}}
            ]
        });
        res.json(books);
    }
    catch(err){
        res.status(500).json({error : 'Failed to searh books'});
    }
});
module.exports = router;