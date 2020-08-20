import React from 'react';
import PropTypes from 'prop-types';

const NoteItem = ({ notes }) =>
  notes &&
  notes.map((note) => {
    return (
      <div>
        <li class='list-group-item'>{note.title}</li>
      </div>
    );
  });

NoteItem.propTypes = {};

export default NoteItem;
