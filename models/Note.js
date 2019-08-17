const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
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
});

const Note = mongoose.model('note', notesSchema);

module.exports = Note;