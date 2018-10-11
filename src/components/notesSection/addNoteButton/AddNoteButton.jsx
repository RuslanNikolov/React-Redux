import React, { Component } from 'react'
import PlusIcon from '../../../assets/imgs/plus-icon.png'
import './AddNoteButton.css';


export default class AddNoteButton extends Component {
  render() {
    return (
      <div className="AddNoteButton">
        <img src={PlusIcon} className="PlusIcon" onClick = {this.props.sendNote}/>
      </div>
    )
  }
}
