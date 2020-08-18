import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { addNotes, getAllNotes } from '../../actions/notes';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddNotes = ({ addNotes, getAllNotes }) => {
  const [formData, setformData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const [dateTime, setDateTime] = useState('');
  const { title, description, date, time } = formData;

  const onChange = (e) => {
    const id = uuidv4();
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
      date: dateTime.slice(0, 10),
      time: dateTime.slice(11),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNotes(formData);
  };

  const onDiscard = () => {
    setformData({ ...formData, description: '', title: '', id: '' });
  };

  return (
    <>
      <h3>Add event in your Calender</h3>
      <form className='form' onSubmit={(e) => onFormSubmit(e)}>
        <div className='form-group'>
          <input
            type='datetime-local'
            id='meeting-time'
            name='dateTime'
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
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
            placeholder='Enter the Title'
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
            placeholder='Enter your notes here...'
            onChange={(e) => onChange(e)}
            required></textarea>
        </div>

        <button className='btn btn-primary' type='submit'>
          Save
        </button>
        <button className='btn btn-danger' type='reset' onClick={onDiscard}>
          Discard
        </button>
      </form>
    </>
  );
};

AddNotes.propTypes = {
  addNotes: PropTypes.func.isRequired,
  getAllNotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.notesReducer.date,
});

export default connect(mapStateToProps, { addNotes, getAllNotes })(AddNotes);
