const express = require ('express');
const router = express.Router();
const {Books,Members,Transaction} = require('../db');

router.post('/issue',async(req,res)=>{
    console.log('Control reaches here');
    try{
        const book = await Books.findById(req.body.bookId);
        const member = await Members.findById(req.body.memberId);
        if(book.quantity > 0){
            const newTransaction = await Transaction.create({
                book : req.body.bookId,
                member : req.body.memberId,
                dueDate: req.body.dueDate

            });
            book.quantity--;
            await book.save();
            res.json(newTransaction);
        }
        else
        {
            res.status(400).json({error: "Book is not available for issuance"});
            
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
});
router.post('/return', async (req,res)=>{
    try{
        const book = await Books.findById(req.body.bookId);
        const member = await Members.findById(req.body.memberId);
        const transaction = await Transaction.findOne({
            book : req.body.booId,
            member : req.body.memberId,
            returnDate: null
        });
        if(transaction){
            transaction.returnDate = req.body.returnDate;
            const daysLate = (req.body.returnDate - transaction.dueDate)/( 1000 * 60 * 60 * 24);
            if( daysLate > 0){
                const lateFee = daysLate *10;
                member.outstandingDebt += lateFee;
                await member.save;
            }
            book.quantity++;
            await book.save();
            await transaction.save();
            res.json(transaction);
        }else{
            res.status(400).json({error : "Transaction not found or book already returned"});

        }

    }
    catch(err){
        res.status(500).json({error : err.message});
    }
});
module.exports= router;