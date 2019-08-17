import React from 'react';
import { getNotes, addNote, deleteNote } from '../../../actions/notes';
import { connect } from 'react-redux';

import Layout from '../../Layout';
import Filter from '../../Filter';
import Notes from '../../Notes';

class Home extends React.Component {
  componentDidMount(){
    this.props.getNotes()
  }
  render() {
    return (
      <Layout>
        <Filter />
        <Notes 
          notes={this.props.notes}
          addNote={this.props.addNote}
          history={this.props.history}
        />
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes()),
  addNote: (note, history) => dispatch(addNote(note, history)),
})

const mapStateToProps = state => ({
  notes: state.notes.notes
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);