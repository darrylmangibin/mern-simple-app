const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// 
app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MONGODB CONFIGURATION
const db = process.env.DATABASE;
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB connected')
}).catch(() => {
  console.log('Connection failed')
})

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})