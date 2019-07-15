import { GET_NOTES, DELETE_NOTE } from '../actions/types';

const initialState = {
  notes: [],
  selected: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload
      }
    case DELETE_NOTE:
      const newNotes = state.notes.filter(note => note._id !== action.payload._id)
      return {
        ...state,
        notes: newNotes
      }
    default:
      return state;
  }
}