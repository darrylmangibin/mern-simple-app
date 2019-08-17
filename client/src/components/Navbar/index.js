import React from 'react';
import classes from './styles.module.css';

import Container from '../common/Container';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <Container>
        <h1 className={classes.title}>Notes App</h1>
        <h2 className={classes.subtitle}>Take notes and never forget</h2>
      </Container>
    </header>
  )
}

export default Navbar