import React, { Component } from 'react'
import './Note.css'
import TrashIcon from '../../../../assets/imgs/trash-icon.png'
import shortid from 'shortid'
import { Redirect } from 'react-router'



export default class Note extends Component {
  constructor(props) {
    super(props)
    this.deleteNote = this.deleteNote.bind(this);
    this.navigateNote = this.navigateNote.bind(this);
    this.state = { redirect: false }
  }
  deleteNote(){
    let id = this.props.note.id;
    this.props.deleteNote(id)
  }
  navigateNote(){
    this.setState({redirect: true})
  }
  
  render() {
    return (
      <div onClick= {this.navigateNote} className = "Note">
         {this.state.redirect && <Redirect to={`/${this.props.note.id}`} />}
         <img src={TrashIcon} alt="Trash bin" className="trash-icon" onClick = {this.deleteNote}/>
         <p className="note-title">{this.props.note.title}</p>
         <div className="note-text-section">{this.props.note.items.map(item => <p key={shortid.generate()} className="note-text">{item.content}</p>)}</div>

         
      </div>
    )
  }
}

