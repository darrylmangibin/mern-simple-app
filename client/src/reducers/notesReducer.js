import { GET_NOTES, GET_NOTE, ADD_NOTE } from '../actions/types'

const initialState = {
  notes:[],
  selected: null
}

const notesReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload
      }
    case GET_NOTE:
      return {
        ...state,
        selected: payload
      }
    case ADD_NOTE:
      return {
        ...state,
        notes: [ ...state.notes, payload ]
      }
    default:
      return state
  }
}

export default notesReducer;