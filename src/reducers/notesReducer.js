import {
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  NOTE_ERROR,
  CALENDAR_CLICK,
  GET_NOTES,
} from '../actions/types';

const initialState = {
  notes: [],
  isDateClicked: false,
  date: '',
  error: {},
};

export default function (state = { initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_NOTE:
      return {
        ...state,
      };
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case CALENDAR_CLICK:
      return {
        ...state,
        date: payload,
        isDateClicked: true,
      };
    default:
      return state;
  }
}
