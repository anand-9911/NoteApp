import {
  CREATE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  NOTE_ERROR,
  CALENDAR_CLICK,
} from './types';

import { setAlert } from './alert';

export const addNotes = (formData) => (dispatch) => {
  try {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');

    let note = formData;
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    dispatch({
      type: CREATE_NOTE,
    });
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
  dispatch({
    type: CALENDAR_CLICK,
    payload: date,
  });
};
