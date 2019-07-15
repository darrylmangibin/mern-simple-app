import { GET_NOTES } from './types';
import url from '../axios/url';

export const getNotes = () => dispatch => {
  url.get('/').then(response => {
    dispatch({
      type: GET_NOTES,
      payload: response.data
    })
  })
}