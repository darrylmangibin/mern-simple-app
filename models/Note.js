const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Number,
    default: moment().valueOf()
  },
  updatedAt: {
    type: Number,
    default: moment().valueOf()
  }
})

const Note = mongoose.model('note', noteSchema);

module.exports = Note;