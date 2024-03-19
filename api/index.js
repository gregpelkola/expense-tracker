const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Transaction = require('./models/transaction.js');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT || 4040; // Define the port

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: 'test success' }); // Correct the response format
});

app.post('/api/transaction', async (req, res) => {
    try {
        await mongoose.connect(mongoUrl);
        const { price, name, datetime, description } = req.body;
        const transaction = await Transaction.create({ price, name, datetime, description });
        res.json(transaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Error creating transaction' });
    }
});

app.get('/api/transactions', async (req, res) => {
    try {
        await mongoose.connect(mongoUrl);
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Error fetching transactions' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
