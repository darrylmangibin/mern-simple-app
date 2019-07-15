import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from './types';
import url from '../axios/url';

export const getNotes = () => dispatch => {
  url.get('/').then(response => {
    dispatch({
      type: GET_NOTES,
      payload: response.data
    })
  })
}

export const addNote = (data, cb) => dispatch => {
  url.post('/', data).then(response => {
    dispatch({
      type: ADD_NOTE,
      payload: response.data
    })
    cb(response.data._id)
  })
}

export const deleteNote = (id, cb) => dispatch => {
  url.delete('/'+id).then(response => {
    dispatch({
      type: DELETE_NOTE,
      payload: response.data
    })
    cb()
  })
}