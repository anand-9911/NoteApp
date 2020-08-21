import React from 'react';
import PropTypes from 'prop-types';
import ViewNote from './ViewNote';
import { Link } from 'react-router-dom';

const onView = (e, id) => {
  console.log(id);
  return <ViewNote />;
};

const NoteItem = ({ notes }) =>
  notes &&
  notes.map((note) => {
    return (
      <div>
        <div class='list-group-item'>
          <h4>{note.title}</h4>
          <div id='buttons'>
            <Link className='btn btn-primary' to='/view-note'>
              View
            </Link>
            <span className='btn btn-success'>Edit</span>
            <span className='btn btn-danger'>Delete</span>
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

NoteItem.propTypes = {};

export default NoteItem;
