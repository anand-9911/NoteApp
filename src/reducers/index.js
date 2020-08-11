import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import alertReducer from './alertReducer';
import authReducer from './authReducer';

export default combineReducers({
  notesReducer,
  alertReducer,
  authReducer,
});
