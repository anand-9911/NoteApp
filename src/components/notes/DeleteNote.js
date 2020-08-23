import React from 'react';
import PropTypes from 'prop-types';
import ModalComponent from '../ModalComponent';
import { Link } from 'react-router-dom';
import { deleteNotes } from '../../actions/notes';
import { connect } from 'react-redux';

const DeleteNote = ({ location, deleteNotes }) => {
  const { note } = location.state;

  const renderActions = () => {
    return (
      <>
        <Link
          className='btn btn-danger'
          to='/create-note'
          onClick={(e) => deleteNotes(note._id)}>
          Delete
        </Link>
        <Link className='btn btn-secondary' to='/create-note'>
          Cancle
        </Link>
      </>
    );
  };
  const renderContent = () => {
    return `Are you sure you want to delete the note with name: ${note.title}`;
  };

  return (
    <>
      <ModalComponent
        title='Delete Note'
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

DeleteNote.propTypes = {
  deleteNotes: PropTypes.func.isRequired,
};

export default connect(null, { deleteNotes })(DeleteNote);
