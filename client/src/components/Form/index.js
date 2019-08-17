import React from 'react';
import classes from './styles.module.css';

import Container from '../common/Container';
import Button from '../common/Button';

class Form extends React.Component {
  render() {
    return (
      <Container>
        <input
          className={classes.input}
          placeholder="Note title"
        />
        <textarea
          className={classes.textarea}
          placeholder="Enter note text"
        >
        </textarea>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button 
            title="Save Note"
            bg="#888"
          />
          <Button 
            title="Delete Note"
            bg="red"
          />
        </div>
      </Container>
    )
  }
}

export default Form;