import React, { Component } from "react";
import "./Joke.css";

export default class Joke extends Component {
  render() {
    return (
      <div className="Joke" >
          {this.props.joke}
      </div>
    );
  }
}
