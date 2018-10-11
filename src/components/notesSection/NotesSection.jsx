import React, { Component } from 'react'
import Logo from './logo/Logo';
import Notes from './notes/Notes';
import AddNoteButton from './addNoteButton/AddNoteButton'
import { connect } from 'react-redux'
import { addNote } from '../../actions/notesActions'
import { deleteNote } from '../../actions/notesActions'
import { changingTitle } from '../../actions/eventsActions'
import { Redirect } from 'react-router'
var shortid = require('shortid');


const mapStateToProps = state => {
  return { notes: state.notes}
}

class NotesSection extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = {redirect: false, id:''}
  }
  addNote() {
    let id = shortid.generate()
    this.props.dispatch(addNote(id));
    this.setState({redirect: true, id})
    this.props.dispatch(changingTitle());
  }
  deleteNote(id) {
    this.props.dispatch(deleteNote(id));
  }
  render() {
    return (
      <div className="NotesSection">
        {this.state.redirect && <Redirect to={`/${this.state.id}`}/>}
        <Logo />
        <AddNoteButton sendNote={this.addNote} />
        <Notes notes={this.props} onDeleteNote = {this.deleteNote} changingTile={this.changingTile}/>
      </div>
    )
  }
}

const ConnectedConstSection = connect(mapStateToProps)(NotesSection);

export default ConnectedConstSection;
