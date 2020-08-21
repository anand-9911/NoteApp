import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import ModalComponent from '../ModalComponent';
import { Link, Redirect } from 'react-router-dom';

const ViewNote = ({ id }) => {
  const renderActions = () => {
    return (
      <>
        <Link className='ui button negative'>Delete</Link>
        <Link className='ui button' to='/'>
          Cancle
        </Link>
      </>
    );
  };
  const renderContent = () => {
    if (true) return 'Are you sure you want to delete the stream?';
    return `Are you sure you waant to delete the stream with title: ${this.props.stream.title}`;
  };

  return (
    <>
      <ModalComponent
        title='Delete Stream'
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => <Link to='/create-note'></Link>}
      />
    </>
  );
};

ViewNote.propTypes = {};

export default ViewNote;
