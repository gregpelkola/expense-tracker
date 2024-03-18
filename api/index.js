const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/transaction.js');
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json());
app.get('/api/test', (req , res) => {
    res.json(body, 'test success');
});

app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {name, datetime, description} = req.body;
    const transaction = await Transaction.create({name, datetime, description});

    res.json(transaction);

});

app.listen(port, 4040);