const express = require('express');
const { addTransactions, getAllTransactions, editTransaction, deleteTransaction } = require('../controllers/transactioncntrl');

const router = express.Router();

//Routers
//add transactions
router.post("/add-transaction", addTransactions);
router.post("/edit-transaction", editTransaction);
router.post("/delete-transaction", deleteTransaction);
//get transactions
router.post("/get-transaction", getAllTransactions);


module.exports = router