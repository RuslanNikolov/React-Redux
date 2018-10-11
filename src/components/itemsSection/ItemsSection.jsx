import React, { Component } from 'react'
import InputSection from './inputSection/InputSection'
import List from './list/List';
import './ItemsSection.css';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { notes: state.notes}
}

class ItemsSection extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let noteId = this.props.match.params.noteId;
    let currentNote = null;
    for (let note of this.props.notes){
       if(note.id === noteId) currentNote = note;
    }
    return (
      <div className = "ItemsSection">
       <InputSection note={ currentNote}/>
       <List note={currentNote !== null && currentNote}/>
      </div>
    )
  }
}

const ConnectedItemsSection = connect(mapStateToProps)(ItemsSection);

export default ConnectedItemsSection;

