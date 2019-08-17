import React from 'react';
import classes from './styles.module.css';
import moment from 'moment';

import Container from '../common/Container';
import Button from '../common/Button';

class Form extends React.Component {

  state = {
    title: '',
    body: '',
    updatedAt: undefined
  }

  componentDidMount(){
    
  }

  componentDidUpdate(prevProps){
    if(prevProps.note !== this.props.note) {
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body,
        updatedAt: this.props.note.updatedAt
      })
    }
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
      updatedAt: moment().valueOf()
    })
  }

  render() {  
    return (
      <Container>
        <input
          className={classes.input}
          placeholder="Note title"
          value={this.state.title}
          name="title"
          onChange={this.onChangeHandler}
        />
        <textarea
          className={classes.textarea}
          placeholder="Enter note text"
          value={this.state.body}
          name="body"
          onChange={this.onChangeHandler}
        >
        </textarea>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button 
            title="Save Note"
            bg="#888"
            click={() => this.props.saveNote(
              this.props.note._id,
              this.state,
              this.props.history
            )}
          />
          <Button 
            title="Delete Note"
            bg="red"
            click={() => this.props.deleteNote(this.props.match.params.id, this.props.history)}
          />
        </div>
      </Container>
    )
  }
}

export default Form;