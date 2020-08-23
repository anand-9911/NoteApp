import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addNotes } from '../../actions/notes';
import { connect } from 'react-redux';

const AddNotes = ({ addNotes }) => {
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
};

export default connect(null, { addNotes })(AddNotes);
