import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditNotes = ({ date }) => {
  const [formData, setformData] = useState({
    title: '',
    text: '',
  });

  const { title, text } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onDiscard = () => {
    setformData({ ...formData, text: '', title: '' });
  };

  return (
    <>
      <h3>EDIT NOTES( )</h3>
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

EditNotes.propTypes = {};

export default EditNotes;
