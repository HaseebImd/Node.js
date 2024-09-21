const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send('Hello from Express Server');
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});