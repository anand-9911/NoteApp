const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Notes = require('../modals/Notes');
const User = require('../modals/User');
const auth = require('../middleware/auth');

//@route  POST api/notes
//@desc   Create a Note for authenticated user
//@access Private

router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title should be betweem(2-30) characters').isLength({
        min: 2,
        max: 30,
      }),
      check('description', 'Description is required').not().isEmpty(),
      check('date', 'Date is required').not().isEmpty(),
      check('time', 'Time is required').not().isEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, date, time } = req.body;

    try {
      //See if note title exists
      let note = await Notes.findOne({ title });
      if (note) {
        return res
          .status(400)
          .json({ errors: [{ mgs: 'Note already exists' }] });
      }
      const user = await User.findById(req.user.id).select('-password');

      //Creating instance of the note
      note = new Notes({
        title,
        description,
        date,
        time,
        user: req.user.id,
      });
      const newNote = await note.save();

      res.json(newNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('server error');
    }
  }
);

//@route  GET api/notes
//@desc   Get all the notes of a particular user
//@access Private

router.get('/', [auth], async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id }).sort({ date: -1 });

    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('server error');
  }
});

//@route  GET api/notes/:id
//@desc   Get post by Id
//@access Private

router.get('/:id', auth, async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ mgs: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ mgs: 'Post not found' });
    }
    res.status(500).send('server error');
  }
});

//@route  Delete api/notes/:id
//@desc  Delete notes by ID
//@access Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ mgs: 'User not authorized' });
    }
    if (!note) {
      return res.status(404).json({ mgs: 'note not found' });
    }
    await note.remove();
    res.json({ mgs: 'note Removed' });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ mgs: 'Post not found' });
    }
    res.status(500).send('server error');
  }
});
//@route  Update api/notes/:id
//@desc  Update notes by ID
//@access Private

router.put(
  '/:id',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('date', 'Date is required').not().isEmpty(),
      check('time', 'Time is required').not().isEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //See if note title exists
      let note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
