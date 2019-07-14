import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <h1>Notes App</h1>
        <h5>Take notes and never forget</h5>
      </div>
    </header>
  )
}

export default Header;