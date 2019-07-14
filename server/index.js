const express = require('express');
const mongoose = require('express');
const bodyParser = require('body-parser');

const app = express();

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running ar port ${port}`);
})