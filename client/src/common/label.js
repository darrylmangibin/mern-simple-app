import React from 'react';
import classes from './label.module.css';

const Label = ({ title, htmlFor, styles }) => {
  return (
    <label style={styles} className={classes.label} htmlFor={htmlFor}>{title}</label>
  )
}

export default Label;