import React, { useState } from 'react';
import {connect} from 'react-redux';
import Moment from 'moment';
import {makeEditValueNull,editNoteAction,deleteNotes,addNotes} from '../../actions/notes'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const EditNotes = ({editNote,isEditClicked,makeEditValueNull,editNoteAction,date,deleteNotes,addNotes}) => {

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
    deleteNotes(editNote)
    addNotes(formData)
    editNoteAction()
    
  };

  const onDiscard = () => {
    setformData({ ...formData, text: '', title: '', id: '' });
    makeEditValueNull()
  };

  return (
    <>
    {isEditClicked ? <><h3>EDIT NOTES( )</h3>
      <form className='form' onSubmit={(e) => onFormSubmit(e)}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            className='form-control'
            value={title===''? editNote.title:title}
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
            value={text===''?editNote.text:text}
            onChange={(e) => onChange(e)}
            required
          
            ></textarea>
        </div>

        <button className='btn btn-primary' type='submit'>
          Save
        </button>
        <button className='btn btn-danger' type='reset' onClick={onDiscard}>
          Discard
        </button>
      </form></>:<></>}
      
    </>
  );
};

EditNotes.propTypes = {};

const mapStateToProps=state=>({
  isEditClicked:state.notesReducer.isEditClicked,
  editNote:state.notesReducer.editNote,
  date:state.notesReducer.date,
})

export default connect(mapStateToProps,{makeEditValueNull,editNoteAction,deleteNotes,addNotes}) (EditNotes);
