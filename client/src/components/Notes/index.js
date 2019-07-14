import React from 'react';
import classes from './Notes.module.css';
import { Link } from 'react-router-dom';

import Button from '../../common/button'

const Notes = () => {
  return (
    <div className="container">
      <p className={`my-5 text-center`}>No notes to show</p>
      <Link to="/11" className={classes.note}>
        <p className={classes.title}>Unnamed note</p>
        <p className={classes.subtitle}>Last edited a few seconds ago</p>
      </Link>
      <Button 
        title="Create Note"
        background="#43799c"
        color="#fff"
      />
    </div>
  )
}

export default Notes;