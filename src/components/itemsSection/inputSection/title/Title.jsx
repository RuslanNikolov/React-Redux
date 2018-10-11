import React, { Component } from 'react'
import './Title.css'
import moment from 'moment'
import {connect} from 'react-redux'
import { changedTitle } from '../../../../actions/eventsActions';
import { updateTitle } from '../../../../actions/notesActions'
import TickIcon from '../../../../assets/imgs/item-tick-icon.png'

const mapStateToProps = state => {
  return {notes: state.notes,
          events: state.events}
}

 class Title extends Component {
   constructor(props) {
     super(props)
     this.handleTitle = this.handleTitle.bind(this);
     this.updateTitle = this.updateTitle.bind(this);
     this.state = {
        title: this.props.title ? this.props.title : ''
     }
   }
   handleTitle(event){
     this.setState({title: event.target.value})
   }
   updateTitle(){
     this.props.dispatch(updateTitle(this.props.note.id,this.state.title))
     this.props.dispatch(changedTitle());
   }
   
  render() {
    return (
      <div className="Title">
        {this.props.events.changingTitle ? <div><input className="title-input" value={this.state.title} onChange={this.handleTitle}/>
                                           <img className="tick-icon" src={TickIcon} onClick={this.updateTitle}/></div>
                                         : <p className="title">{this.props.title ? this.props.title : 'Noteless'}</p>
                                         }
        
        <p className="sub-title">Friday April 21</p>
      </div>
    )
  }
}

const connectedTitle = connect(mapStateToProps)(Title);
export default connectedTitle;
