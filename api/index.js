const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.get('/api/test', (req , res) => {
    res.json(body, 'test success');
});

app.post('/api/transaction', (req, res) => {
    res.json(body, 'transaction added');

});

app.listen(port, 4040);