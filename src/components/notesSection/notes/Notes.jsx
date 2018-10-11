import React, { Component } from 'react'
import './Notes.css'
import Note from './note/Note'
import shortid from 'shortid'

export default class Notes extends Component {
  render() {
    return (
      <div className="Notes">
         {this.props.notes.notes.length > 0 ? this.props.notes.notes.map((note) => { 
                                              return (<Note key={shortid.generate()} note={note} deleteNote = {this.props.onDeleteNote}/>)}) 
                                            :  <p className="empty-list-reminder">Press for a more productive life.</p>  }
      </div>
    )
  }
}
