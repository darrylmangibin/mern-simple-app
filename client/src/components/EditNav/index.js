import React from 'react';
import classes from './EditNav.module.css';
import { Link } from 'react-router-dom';

import Container from '../../common/container';

const EditNav = () => {
  return (
    <Container>
      <div className="container">
        <div className={classes.editContainer}>
          <Link to="/">Home</Link>
          <p>Last Edited a few seconds ago</p>
        </div>
      </div>
    </Container>
  )
}

export default EditNav;