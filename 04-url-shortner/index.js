const express = require('express');
const mongoose = require('mongoose');
const urlRoute = require('./routes/url');
const connectToMongoose = require('./connect');
const app = express();
const PORT = 8000;


connectToMongoose("mongodb://localhost:27017/short-url");
app.use(express.json());

app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

