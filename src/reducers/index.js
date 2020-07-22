import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  notesReducer,
  alertReducer,
});
