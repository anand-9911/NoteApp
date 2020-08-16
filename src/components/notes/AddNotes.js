import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { addNotes, getAllNotes } from '../../actions/notes';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddNotes = ({ addNotes, date, getAllNotes }) => {
  const [formData, setformData] = useState({
    title: '',
    text: '',
    id: '',
    dateTime: '',
  });

  // const [dateTime, setDateTime] = useState({
  //   date2: '',
  //   time2: '',
  // });

  // const { date2, time2 } = dateTime;

  const { title, text, dateTime } = formData;
  let formattedDate = Moment(date).format('YYYY-MM-DD');

  const onChange = (e) => {
    const id = uuidv4();
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
      id: id,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onDiscard = () => {
    setformData({ ...formData, text: '', title: '', id: '' });
  };

  // const onInputChange = (e) => {
  //   setDateTime({ ...dateTime, [e.target.name]: e.target.value });
  // };

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
            onChange={(e) => onChange(e)}
            min='1947-01-01T00:00'
            max='2050-01-01T00:00'
          />
        </div>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
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
            name='text'
            rows='5'
            value={text}
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
