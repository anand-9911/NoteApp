import {
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  NOTE_ERROR,
  CALENDAR_CLICK,
  GET_NOTES,
  EDIT_CLICK,
  NULL_VALUE
} from '../actions/types';

const initialState = {
  notes: [],
  isDateClicked: false,
  isEditClicked:false,
  date: '',
  error: {},
  editNote:{}
};

export default function (state = { initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_NOTE:
      return {
        ...state,
      };
      case DELETE_NOTE:
      return {
        ...state,
      };
      case EDIT_NOTE:
      return {
        ...state,
        isEditClicked:false,
        editNote:{}
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
    case EDIT_CLICK:
      return {
        ...state,
        isEditClicked: true,
        editNote:payload
      };
    case NOTE_ERROR:
      return {
        ...state,
        users:null
      };
    case NULL_VALUE:
      return {
        ...state,
        isEditClicked:false,
        editNote:{}
      };
    default:
      return state;
  }
}
