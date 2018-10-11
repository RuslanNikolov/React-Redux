import React, { Component } from 'react'
import './List.css'
import ListNote from './listNote/ListNote'
import ItemPlusIcon from '../../../assets/imgs/item-plus-icon.png'
import ItemTickIcon from '../../../assets/imgs/item-tick-icon.png'
import shortid from 'shortid'
import { connect } from 'react-redux'
import { onInput } from '../../../actions/eventsActions'
import { offInput } from '../../../actions/eventsActions'
import { showJoke } from '../../../actions/eventsActions'




const mapStateToProps = state => {
  return { notes: state.notes,
           events: state.events }
}

class ListSection extends Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this);
    this.inputedItem = this.inputedItem.bind(this);

    
    
  }
  addItem() {
   this.props.dispatch(onInput())
   this.props.dispatch(showJoke())
  }
  inputedItem() {
    this.props.dispatch(offInput())
  }

  

  
  render() {
    if(this.props.notes.length > 0 ) { 
      return (
        <div className="List">
          {this.props.events.onInput ?  <img src={ItemTickIcon} alt="Add input" className="item-tick-icon" onClick={this.inputedItem}/>
                                    :  <img src={ItemPlusIcon} alt="Add item" className="item-plus-icon" onClick = {this.addItem}/> }
         
         
          { this.props.note ? this.props.note.items.map(item => <ListNote key={shortid.generate()} item={item} note={this.props.note}/> ) 
                                            : <p className="add">Add a note</p>}
          
        </div>
      )
    }
    else {
      return (
        <div className="no-list">Add a note</div>
      )
    }
    
  }
}


const ConnectedListSection = connect(mapStateToProps)(ListSection);
export default ConnectedListSection;