const express = require('express');
const app = express();

app.get('/api/test', (req , res) => {
    res.json(body, 'test success');
});

app.post('/api/transaction', (req, res) => {
    res.json(body, 'transaction added');

});

app.listen(port, 4040);