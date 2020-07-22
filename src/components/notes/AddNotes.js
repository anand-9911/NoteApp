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
    date: '',
  });

  const { title, text } = formData;
  let formattedDate = Moment(date).format('YYYY-MM-DD');

  const onChange = (e) => {
    const id = uuidv4();
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
      id: id,
      date: formattedDate,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNotes(formData);
    onDiscard();
    getAllNotes();
  };

  const onDiscard = () => {
    setformData({ ...formData, text: '', title: '', id: '' });
  };

  return (
    <>
      <h3>ADD NOTES</h3>
      <form className='form' onSubmit={(e) => onFormSubmit(e)}>
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
