import React from 'react';
import classes from './container.module.css';

const Container = ({ children }) => {
  return (
    <div className={classes.formContainer}>
      {children}
    </div>
  )
}

export default Container;