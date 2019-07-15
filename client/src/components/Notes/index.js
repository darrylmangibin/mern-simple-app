import React from 'react';
import classes from './Notes.module.css';
import { getNotes, addNote } from '../../actions/notes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Note from './Note';
import Button from '../../common/button'

class Notes extends React.Component {

  componentDidMount() {
    const { getNotes } = this.props;
    getNotes()
  }

  handleAddNote = () => {
    const note = {
      title: '',
      body: '',
      updatedAt: Date.now(),
      createdAt: Date.now()
    };
    this.props.addNote(note, (id) => {
      this.props.history.push(`/${id}`)
    });

  }

  renderNotes = () => {
    const { notes } = this.props;
    if(notes.length <= 0) {
      return <p className={`my-5 text-center`}>No notes to show</p>
    }
    return notes.map(note => {
      return(
        <Note 
          key={note._id}
          note={note}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
        {this.renderNotes()}
        <Button
          handleClick={this.handleAddNote}
          title="Create Note"
          background="#43799c"
          color="#fff"
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes()),
  addNote: (data, cb) => dispatch(addNote(data, cb))
})

const mapStateToProps = state => ({
  notes: state.notes.notes
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));