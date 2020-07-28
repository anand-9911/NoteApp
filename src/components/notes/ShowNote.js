import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllNotes } from '../../actions/notes';
import Moment from 'moment';
import NoteItem from './NoteItem';

const ShowNote = ({ date, getAllNotes, notes, isDateClicked }) => {
  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  let matchNotes = [];

  const renderNotes = () => {
    let formattedDate = Moment(date).format('YYYY-MM-DD');

    if (isDateClicked) {
      notes.map((note) => {
        if (note.date === formattedDate) {
          matchNotes.push(note);
        }
      });
    }
    return matchNotes;
  };

  renderNotes();
  return <>{matchNotes.length > 0 && <NoteItem notesMatched={matchNotes} />}</>;
};

ShowNote.propTypes = {
  getAllNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.notesReducer.date,
  notes: state.notesReducer.notes,
  isDateClicked: state.notesReducer.isDateClicked,
});

export default connect(mapStateToProps, { getAllNotes })(ShowNote);
