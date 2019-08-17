import React from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote, saveNote } from '../../../actions/notes';

import Layout from '../../Layout';
import Navmenu from '../../Navmenu';
import Form from '../../Form';

class Edit extends React.Component {
  componentDidMount(){
    this.props.getNote(this.props.match.params.id, this.props.history)
  }
  render() {
    return (
      <Layout>
        <Navmenu 
          note={this.props.note}
        />
        <Form 
          { ...this.props }
        />
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNote: (id, history) => dispatch(getNote(id, history)),
  deleteNote: (id, history) => dispatch(deleteNote(id, history)),
  saveNote: (id, note, history) => dispatch(saveNote(id, note, history))
})

const mapStateToProps = state => ({
  note: state.notes.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit);