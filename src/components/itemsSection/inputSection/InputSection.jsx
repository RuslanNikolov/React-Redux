import React, { Component } from "react";
import "./InputSection.css";
import Input from "./input/Input";
import Title from "./title/Title";
import axios from 'axios'

export default class InputSection extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       image: ''
    }
  }
  render() {
    return (
      <div className="InputSection" style={{background: this.state.image}} >
        <div className="gradient"></div>>
          <Title title={this.props.note && this.props.note.title} note={this.props.note && this.props.note}/>
          <Input note={this.props.note && this.props.note}/>
      </div>
    );
  }
}
