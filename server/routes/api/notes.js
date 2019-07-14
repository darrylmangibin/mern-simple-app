const express = require('express');
const router = express.Router();

// Models
const { Note } = require('../../models/Note');

// @ROUTE GET
// @desc Get all notes
// @acccess Public
router.get('/', (req, res) => {
  Note.find((err, notes) => {
    if(err) return res.status(400).json({ msg: 'Something went wrong', err });
    return res.status(200).json(notes)
  });
});

// @ROUTE POST
// @desc Create a note
// @acccess Public
router.post('/', (req, res) => {
  const newNote = new Note(req.body);
  newNote.save((err, note) => {
    if(err) return res.status(400).json({ success: false });
    return res.status(200).json(note)
  });
});

// @ROUTE DELETE
// @desc Delete a note
// @acccess Public
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Note.findByIdAndDelete(id, (err, note) => {
    if(err) return res.status(400).json({ success: false, err });
    if(!note) return res.status(400).json({ msg: 'No item found' });
    return res.status(200).json(note)
  })
})

// @ROUTE PUT
// @desc Edit a note
// @acccess Public
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, body, updatedAt } = req.body;
  const note = { title, body, updatedAt };
  Note.findByIdAndUpdate(id, {$set: { note }}, (err, note) => {
    if(err) return res.status(400).json({ success: false, err });
    if(!note) return res.status(400).json({ success: false, msg: 'No note found' });
    return res.status(200).json(note)
  })
})

module.exports = router;