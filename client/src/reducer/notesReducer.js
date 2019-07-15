import { GET_NOTES } from '../actions/types';

const initialState = {
  notes: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload
      }
    default:
      return state;
  }
}