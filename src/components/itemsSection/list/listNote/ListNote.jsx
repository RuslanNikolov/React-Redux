import React, { Component } from "react";
import "./ListNote.css";
import ItemInputRectangle from "../../../../assets/imgs/item-input-rectangle.png";
import TickCheckboxIcon from "../../../../assets/imgs/tick-checkbox-icon.png";
import CloseIcon from "../../../../assets/imgs/close-icon.png";
import PenIcon from "../../../../assets/imgs/pen-icon.png";
import TickIcon from '../../../../assets/imgs/item-tick-icon.png';
import { deleteItem } from '../../../../actions/notesActions'
import { updateItem } from '../../../../actions/notesActions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {notes: state.notes}
}

 class ListNote extends Component {
  constructor(props) {
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
    this.deleteItem = this.deleteItem.bind(this);
    this.switchToInput = this.switchToInput.bind(this);
    this.switchOutInput = this.switchOutInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
       checked: false,
       switchedToInput: false,
       from: this.props.item.from,
       till:this.props.item.till,
       content: this.props.item.content

    }
  }
 
 handleCheck(event) {
    this.setState((prevState, props) => ({checked: !prevState.checked}))
 }
 
 deleteItem() {
   let noteId = this.props.note.id;
   let itemId = this.props.item.id;
   this.props.dispatch(deleteItem(noteId, itemId));
}

switchToInput(){
  this.setState({switchedToInput: true});
}
switchOutInput(){
  this.setState({switchedToInput: true});
  
  this.props.dispatch(updateItem(this.props.note.id,
                                 this.props.item.id,
                                 this.state.from,
                                 this.state.till,
                                 this.state.content))
 
                                 
  }

handleInputChange(event){
  this.setState({[event.target.name]: event.target.value})
}

  render() {
    return (
      <div className="ListNote">
        <input type="checkbox" value={this.state.checked} name="checkbox" onChange={this.handleCheck} />
        <div className="timeLimits">
            {this.state.switchedToInput ? <input className="time-from-input" value={this.state.from} name="from" onChange={this.handleInputChange}/> 
                                        : <p className="time-from">{this.props.item.from}</p>}
            {this.state.switchedToInput ? <input className="time-till-input" value={this.state.till} name="till" onChange={this.handleInputChange}/> 
                                        : <p className="time-till">{this.props.item.till}</p>} 
        </div>
        <div className="vertical-line" />

          {this.state.switchedToInput ? <input className="content-text-input" value={this.state.content} name="content" onChange={this.handleInputChange}/> 
                                     : <p className={`content-text ${this.state.checked && 'ticked'}`}>{this.props.item.content}</p>}
        
          {this.state.switchedToInput ?<img src={TickIcon} alt="Tick" className="pen-icon tick-icon" onClick={this.switchOutInput}/>
                                      :<img src={PenIcon} alt="Pen" className="pen-icon" onClick={this.switchToInput}/>}
        <img src={CloseIcon} alt="Close" className="close-icon" onClick={this.deleteItem}/>
      </div>
    );
  }
}

const connectedListNote = connect(mapStateToProps)(ListNote);
export default connectedListNote;