import React from 'react';
import classes from './styles.module.css';

import Container from '../common/Container';
import Lists from '../Lists';
import Button from '../common/Button';

const Notes = () => {
  return (
    <Container>
      <p className={classes.empty}>No Notes to show</p>
      <Lists />
      <Button 
        title="Create Note"
      />
    </Container>
  )
}

export default Notes;