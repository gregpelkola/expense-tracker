const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const TransactionSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
});

const TransactionModel = model('name: Transaction', TransactionSchema);

module.exports = TransactionModel;