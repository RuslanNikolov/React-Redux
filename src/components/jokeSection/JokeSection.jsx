import React, { Component, Fragment } from "react";
import "./JokeSection.css";
import Joke from "./joke/Joke";
import Categories from './categories/Categories';
import { hideJoke } from '../../actions/eventsActions'
import { nullInput } from '../../actions/eventsActions';
import { showInsideJoke } from '../../actions/eventsActions';
import { hideInsideJoke } from '../../actions/eventsActions';
import { getCategories } from '../../actions/jokesActions';
import { changeJoke } from '../../actions/jokesActions';
import { getCategory } from '../../actions/jokesActions';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { jokes: state.jokes,
           events: state.events}
}

class JokeSection extends Component {
  constructor(props) {
    super(props)
    this.showJoke = this.showJoke.bind(this);
    this.changeJoke= this.changeJoke.bind(this);
  }
  showJoke(){
    this.props.dispatch(hideJoke())

  }
  changeJoke(){
    this.props.dispatch(changeJoke());
 
  } 

  
  render() {
    
      return (
        <div className="JokesSection">
          {this.props.events.showJoke && (<div><p className="hear-a-joke">Too much productivity. Wanna have a laugh?</p>
          <button className="more-jokes good-mood" onClick={this.showJoke}>Yes</button></div>)}

          {this.props.events.showInsideJoke && <div><Joke  joke={this.props.jokes.content}/>
          <button className="more-jokes" onClick={this.changeJoke}>More jokes!</button></div>}

        </div>
        )
    
    
  }
}

const ConnectedJokeSection = connect(mapStateToProps)(JokeSection);

export default ConnectedJokeSection;
