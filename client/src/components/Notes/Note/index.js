import React from 'react';
import classes from './Note.module.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Note = ({ note }) => {
  
  const renderUpdatedAt = () => {
    const ts = moment(note.updatedAt).valueOf();
    return `Last edited ${moment(ts).fromNow()}`
  }

  return (
    <Link to={`/${note._id}`} className={classes.note}>
      <p className={classes.title}>{note.title.length === 0 ? 'Unnamed note' : note.title}</p>
      <p className={classes.subtitle}>{renderUpdatedAt()}</p>
    </Link>
  )
}

export default Note;