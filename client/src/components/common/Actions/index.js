import React from 'react';
import classes from './styles.module.css';

const Actions = (props) => {
  return (
    <div className={classes.actions}>
      {props.children}
    </div>
  )
}

export default Actions;