const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Notes = require('../modals/Notes');

const auth = require('../middleware/auth');

//@route  GET api/notes
//@desc   Create a Note for authenticated user
//@access Private

router.post(
  '/',
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

module.exports = router;
