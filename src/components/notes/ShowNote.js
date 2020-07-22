import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllNotes } from '../../actions/notes';
import Moment from 'moment';

const ShowNote = ({ date, getAllNotes, notes, isDateClicked }) => {
  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  const renderNotes = () => {
    let match = [];
    let formattedDate = Moment(date).format('YYYY-MM-DD');

    console.log(formattedDate);
    if (isDateClicked) {
      notes.map((note) => {
        if (note.date === date) {
          match.push(note);
        }
      });
    }
  };

  return (
    <div>
      SHOW NOTE <div>{renderNotes()}</div>
    </div>
  );
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
