import {
  CREATE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  NOTE_ERROR,
} from './types';
import axios from 'axios';
import history from '../history';

import { setAlert } from './alert';

// Creating notes
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
    dispatch(getAllNotes());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.mgs, 'danger')));
    }
    dispatch({
      type: NOTE_ERROR,
    });
  }
};

//Fetching notes for users
export const getAllNotes = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/notes');
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NOTE_ERROR,
    });
  }
};

//function to delete notes
export const deleteNotes = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/notes/${id}`);
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

// Editing notes
export const editNote = (formData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/notes/${id}`,
      JSON.stringify(formData),
      config
    );

    dispatch({
      type: EDIT_NOTE,
      payload: res.data,
    });
    dispatch(setAlert('Note Edited', 'success'));
    dispatch(getAllNotes());
    history.push('/create-note');
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.mgs, 'danger')));
    }
    dispatch({
      type: NOTE_ERROR,
    });
  }
};
