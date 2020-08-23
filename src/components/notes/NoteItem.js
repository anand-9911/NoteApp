import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoteItem = ({ notes }) =>
  notes &&
  notes.map((note) => {
    return (
      <div>
        <div class='list-group-item'>
          <h4>{note.title}</h4>
          <div id='buttons'>
            <Link
              className='btn btn-primary'
              to={{ pathname: '/view-note', state: { note: note } }}>
              View
            </Link>
            <Link
              className='btn btn-success'
              to={{ pathname: '/edit-note', state: { note: note } }}>
              Edit
            </Link>
            <Link
              className='btn btn-danger'
              to={{ pathname: '/delete-note', state: { note: note } }}>
              Delete
            </Link>
            <span className='dateTime'>
              <span>Date:</span>
              {note.date}
            </span>
            <span className='dateTime'>
              <span>Time:</span>
              {note.time}
            </span>
          </div>
        </div>
      </div>
    );
  });

NoteItem.propTypes = {
  notes: PropTypes.array,
};

export default NoteItem;
