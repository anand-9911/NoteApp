import {
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  NOTE_ERROR,
  GET_NOTES,
} from '../actions/types';

const initialState = {
  notes: [],
  note: null,
  loading: true,
  isDateClicked: false,
  isEditClicked: false,
  error: {},
  editNote: {},
};

export default function (state = { initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_NOTE:
      return {
        ...state,
        note: payload,
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
      };
    case EDIT_NOTE:
      return {
        ...state,
        isEditClicked: false,
        editNote: {},
      };
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false,
      };
    case NOTE_ERROR:
      return {
        ...state,
        note: null,
        loading: false,
      };
    default:
      return state;
  }
}
