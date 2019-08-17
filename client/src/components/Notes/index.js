import React from 'react';
import classes from './styles.module.css';

import Container from '../common/Container';
import Lists from '../Lists';
import Button from '../common/Button';

const Notes = (props) => {
  let renderNotes = null;

  if(props.notes.length <= 0) {
    renderNotes = (<p className={classes.empty}>No Notes to show</p> )
  } else {
    renderNotes = props.notes.map(note => {
      return (
        <Lists 
          key={note._id}
          note={note}
        />
      )
    })
  }

  return (
    <Container>
      { renderNotes }
      <Button 
        click={() => props.addNote({}, props.history)}
        title="Create Note"
      />
    </Container>
  )
}

export default Notes;