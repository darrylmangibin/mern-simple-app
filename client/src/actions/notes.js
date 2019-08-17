import { GET_NOTES, GET_NOTE, ADD_NOTE, DELETE_NOTE, SAVE_NOTE } from './types';
import axios from 'axios';

const url = axios.create({
  baseURL: 'http://localhost:5000/api/notes'
})

export const getNotes = () => dispatch => {
  url.get('/').then(response => {
    dispatch({
      type: GET_NOTES,
      payload: response.data
    })
  })
}

export const getNote = (id, history) => dispatch => {
  url.get(`/${id}`).then(response => {
    dispatch({
      type: GET_NOTE,
      payload: response.data
    })
  }).catch(() => {
    history.push('/')
  })
}

export const addNote = (note, history) => dispatch => {
  url.post('/', note).then(response => {
    dispatch({
      type: ADD_NOTE,
      payload: response.data
    })
    console.log(response.data)
    history.push(`/${response.data._id}`)
  })
}

export const deleteNote = (id, history) => dispatch => {
  url.delete(`/${id}`).then(response => {
    dispatch({
      type: DELETE_NOTE,
      payload: response.data
    })
    history.push('/')
  })
}

export const saveNote = (id, note, history) => dispatch => {
  url.put(`/${id}`, note).then(response => {
    dispatch({
      type: SAVE_NOTE,
      payload: response.data
    })
    history.push('/')
  })
}
