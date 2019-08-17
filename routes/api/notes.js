const express = require('express');
const router = express.Router();

const Note = require('../../models/Note');

// @ROUTE GET
// @desc Get all notes
// @access public
router.get('/', (req, res) => {
  Note.find().then(notes => {
    if(!notes) return res.status(400).json({ msg: 'No data found' });
    res.json(notes)
  }).catch(err => {
    res.status(400).json(err)
  })
})

// @route GET
// @desc Get note by ID
// @access Public
router.get('/:id', (req, res) => {
  Note.findById(req.params.id).then(note => {
    if(!note) return res.status(400).json({ success: false });
    res.json(note)
  }).catch(err => {
    const error = Object.assign({}, err, { msg: 'No data found' })
    res.status(400).json(error)
  })
})

// @Route POST
// @desc Create a note
// @access Public
router.post('/', (req, res) => {
  const { title, body, createdAt, updatedAt } = req.body;
  const newNote = new Note({ title, body, createdAt, updatedAt });
  newNote.save().then(note => {
    res.json(note)
  }).catch(err => {
    const error = Object.assign({}, err, { msg: 'Can\'t create note' })
    res.status(400).json(error)
  })
})

// @Route DELETE
// @desc Delete a note by id
// @access Public
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Note.findByIdAndRemove(id).then(note => {
    if(!note) return res.status(400).json({ success: false })
    res.json(note)
  }).catch(err => {
    res.status(400).json({ success: false })
  })
})

// Route PUT
// @desc Edit a note
// @access Public
router.put('/:id', (req, res) => {
  const { id } = req.params;
  Note.findByIdAndUpdate(id, req.body).then(note => {
    if (!note) return res.status(400).json({ success: false })
    res.json(note)
  }).catch(err => {
    res.status(400).json({ success: false })
  })
})

module.exports = router;