import React, { Component, Fragment } from "react";
import "./Input.css";
import { connect } from "react-redux";
import { addItem } from '../../../../actions/notesActions';
import { nullInput } from '../../../../actions/eventsActions';
import shortid from 'shortid'

const mapStateToProps = state => {
  return { notes: state.notes,
           events: state.events };
};

class Input extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = { from: '', till: '', content: '', counter: 0}
    
  }
  handleChange(event){
     this.setState({[event.target.name]: event.target.value})
  }
  
  render() {
    let counter = 0;
    if (this.props.events.onInput === true) {

      return (
        <div className="Input">
          <input className="from" type="text" name="from" placeholder="00:00" value={this.state.from} onChange={this.handleChange}/>
          <p className="till-text">till</p>
          <input className="till" type="text" name="till" placeholder="24:00" value={this.state.till} onChange={this.handleChange}/>
          <input className="content" type="text" name="content" placeholder="Stop being lazy.." value={this.state.content} onChange={this.handleChange}/>
        </div>
      );
    }
    else if(this.props.events.onInput === false){
      if(this.state.from !== '' && this.state.from !== '' && this.state.from !== '' ){
            
           
           this.props.dispatch(addItem(this.props.note.id,
                                       shortid.generate(),
                                       this.state.content,
                                       this.state.from,
                                       this.state.till))

           this.props.dispatch(nullInput());
           
          
      }
      return <Fragment />;
    }
    else if(this.props.events.onInput === null){
      return <Fragment />
    }
   
  }
}

const connectedInput = connect(mapStateToProps)(Input);

export default connectedInput;
