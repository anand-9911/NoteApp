import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllNotes } from '../../actions/notes';
import { connect } from 'react-redux';
import NoteItem from './NoteItem';

const ShowNote = ({ getAllNotes, notes }) => {
  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  let filteredNotes;
  if (notes) {
    filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(input.toLowerCase());
    });
  }

  return (
    <>
      <div class='input-group mb-3'>
        <div class='input-group-prepend'>
          <span class='input-group-text' id='inputGroup-sizing-default'>
            Search Note
          </span>
        </div>
        <input
          type='text'
          class='form-control'
          value={input}
          onChange={(e) => onChange(e)}
        />
      </div>
      <ul class='list-group'>
        <li class='list-group-item list-group-item-primary'>My Events</li>
        {filteredNotes && <NoteItem notes={filteredNotes} />}
      </ul>
    </>
  );
};

ShowNote.propTypes = {
  getAllNotes: PropTypes.func.isRequired,
  notes: PropTypes.array,
};

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes,
});

export default connect(mapStateToProps, { getAllNotes })(ShowNote);
