const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NotesSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
module.exports = Notes = mongoose.model('notes', NotesSchema);
