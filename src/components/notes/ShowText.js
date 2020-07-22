import React from 'react';
import ModalComponent from '../ModalComponent';
import PropTypes from 'prop-types';
import history from '../../history';
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom';

const ShowText = ({ location }) => {
    const { note } = location.state;
    console.log(note)
  const renderActions = () => {
    return (
      <>
        <Link className='ui button' to='/'>
          Cancle
        </Link>
      </>
    );
  };

  const renderContent = () => {
    return note.text
  };

  return (
    <>
      {note ? <>
<ModalComponent
        title={note.title}
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}
      /></>:<Spinner/>}
    </>
  );
};

ShowText.propTypes = {
  
};

export default ShowText;