import {
  CREATE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  NOTE_ERROR,
  CALENDAR_CLICK,
  EDIT_CLICK,
  NULL_VALUE,
} from './types';
import axios from 'axios';

import { setAlert } from './alert';

export const addNotes = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(formData);
    const res = await axios.post(
      '/api/notes',
      JSON.stringify(formData),
      config
    );

    dispatch({
      type: CREATE_NOTE,
      payload: res.data,
    });
    dispatch(setAlert('Note Added', 'success'));
  } catch (error) {
    // const errors = error.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.mgs, 'danger')));
    // }
    dispatch({
      type: NOTE_ERROR,
    });
  }
};
export const editNoteAction = (formData) => (dispatch) => {
  try {
    dispatch({
      type: EDIT_NOTE,
    });
    dispatch(getAllNotes());
    dispatch(setAlert('Note Edited', 'success'));
  } catch (error) {
    dispatch({
      type: NOTE_ERROR,
    });
  }
};

export const getAllNotes = () => (dispatch) => {
  try {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');

    dispatch({
      type: GET_NOTES,
      payload: notes,
    });
  } catch (error) {
    dispatch({
      type: NOTE_ERROR,
    });
  }
};

export const onCalendarClick = (date) => (dispatch) => {
  console.log(date);
  dispatch({
    type: CALENDAR_CLICK,
    payload: date,
  });
};
export const onEditClick = (note) => (dispatch) => {
  dispatch({
    type: EDIT_CLICK,
    payload: note,
  });
};

export const makeEditValueNull = () => (dispatch) => {
  dispatch({
    type: NULL_VALUE,
  });
};

export const deleteNotes = (note) => (dispatch) => {
  try {
    let notes = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : [];
    let index;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === note.id) {
        index = i;
        break;
      }
    }
    if (index === undefined) return;
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch({
      type: DELETE_NOTE,
    });
    dispatch(getAllNotes());
    dispatch(setAlert('Note Deleted', 'danger'));
  } catch (error) {
    dispatch({
      type: NOTE_ERROR,
    });
  }
};
