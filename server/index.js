const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB configuration;
const db = process.env.DATABASE;
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB connected')
}).catch((err) => {
  console.log(err)
});

// ROUTES
app.use('/api/notes', require('./routes/api/notes'));

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running ar port ${port}`);
})