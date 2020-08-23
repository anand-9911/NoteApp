import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalComponent from '../ModalComponent';
import { Link } from 'react-router-dom';
import { editNote } from '../../actions/notes';
import { connect } from 'react-redux';
import history from '../../history';

import Spineer from '../layout/Spinner';
const EditNote = ({ location, editNote }) => {
  // const { note } = location.state;
  // console.log(location.state.note);

  const [formData, setformData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const [dateTime, setDateTime] = useState('');
  const { title, description, date, time } = formData;

  const onDateChange = (e) => {
    setDateTime(e.target.value);
  };

  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
      date: dateTime.slice(0, 10),
      time: dateTime.slice(11),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (location) {
      console.log(formData);
      console.log(location.state.note._id);
      editNote(formData, location.state.note._id);
    } else return <Spineer />;
  };

  const renderActions = () => {
    return (
      <>
        {' '}
        <Link className='btn btn-success' onClick={(e) => onFormSubmit(e)}>
          Save
        </Link>
        <Link className='btn btn-secondary' to='/create-note'>
          Cancle
        </Link>
      </>
    );
  };
  const renderContent = () => {
    return (
      <>
        <h3>Edit Event-{location && location.state.note.title}</h3>
        <form className='form' onSubmit={(e) => onFormSubmit(e)}>
          <div className='form-group'>
            <input
              type='datetime-local'
              id='meeting-time'
              name='dateTime'
              value={dateTime}
              onInput={(e) => onDateChange(e)}
              min='1947-01-01T00:00'
              max='2050-01-01T00:00'
            />
          </div>
          <div className='form-group'>
            <label>Title</label>
            <input
              type='description'
              name='title'
              className='form-control'
              value={title}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Content</label>
            <textarea
              class='form-control'
              name='description'
              rows='5'
              value={description}
              onChange={(e) => onChange(e)}
              required></textarea>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      <ModalComponent
        title={location && location.state.note.title}
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

EditNote.propTypes = {
  editNote: PropTypes.func.isRequired,
};

export default connect(null, { editNote })(EditNote);
