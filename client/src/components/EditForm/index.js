import React from 'react';
import classes from './EditForm.module.css';

import Label from '../../common/label';
import Button from '../../common/button';

class EditForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={classes.inputContainer}>
          <input id="noteTitle" className={classes.input} type="text" />
          <Label 
            htmlFor="noteTitle"
            title="Note Title"
            styles={{ fontSize: 18, fontWeight: 500 }}
          />
        </div>
        <div className={classes.inputContainer}>
          <textarea id="noteBody" className={classes.textarea}></textarea>
          <Label 
            htmlFor="noteBody"
            title="Enter note text"
          />
        </div>
        <Button 
          title="Remove note"
          color="#fff"
          background="#888888"
        />
      </div>
    )
  }
}

export default EditForm;