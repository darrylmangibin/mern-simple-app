import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.css'

const Lists = () => {
  return (
    <React.Fragment>
      <Link
        to="/1"
        className={classes.lists}
      >
        <p className={classes.title}>Unnamed Note</p>
        <p className={classes.subtitle}>Last edited a few seconds a ago</p>
      </Link>
    </React.Fragment>
  )
}

export default Lists;