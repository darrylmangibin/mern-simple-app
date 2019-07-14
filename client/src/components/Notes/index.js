import React from 'react';
import classes from './Notes.module.css';

import Button from '../../common/button'

const Notes = () => {
  return (
    <div className="container">
      <p className={`my-5 text-center`}>No notes to show</p>
      <a className={classes.note}>
        <p className={classes.title}>Unnamed note</p>
        <p className={classes.subtitle}>Last edited a few seconds ago</p>
      </a>
      <Button 
        title="Create Note"
        background="#43799c"
        color="#fff"
      />
    </div>
  )
}

export default Notes;