import React from 'react';
import PropTypes from 'prop-types';
import ModalComponent from '../ModalComponent';
import { Link } from 'react-router-dom';

const ViewNote = ({ location }) => {
  const { note } = location.state;

  const renderActions = () => {
    return (
      <>
        <Link className='btn btn-secondary' to='/create-note'>
          Cancle
        </Link>
      </>
    );
  };
  const renderContent = () => {
    return (
      <>
        <div id='view-note'>
          <ul>
            <li>{note.date}</li>
            <li>{note.time}</li>
          </ul>
          <div>
            <p>{note.description}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ModalComponent
        title={note.title}
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

ViewNote.propTypes = {
  location: PropTypes.object,
};

export default ViewNote;
