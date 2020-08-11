import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  LOAD_USER,
  AUTH_ERROR,
  LOGOUT,
} from './types';

import axios from 'axios';
import { setAlert } from './alert';
import setToken from '../utils/setToken';
import history from '../history';

//Load User
export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.getItem('token')) {
      setToken(localStorage.token);
    }
    const res = await axios.get('/api/auth/');
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Login Action
export const login = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/auth', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(
      setAlert('You are logged in to this awesome application', 'success')
    );
    history.push('/create-note');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.mgs, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert('Server Error', 'danger'));
  }
};

//Register Action

export const register = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('api/users/', formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert('User Registered Successfully', 'success'));
    history.push('/create-note');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Logout Action
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
