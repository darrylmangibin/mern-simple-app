import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

const rootReducer = () => {
  return combineReducers({
    notes: notesReducer
  })
}

export default rootReducer;