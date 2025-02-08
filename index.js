const express = require('express');
const { resolve } = require('path');
const connectDatabase = require('./express')
require('dotenv').config();
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
connectDatabase();

app.listen(port, () => {
  console.log( `Example app listening at http://localhost:${port}`); 
});