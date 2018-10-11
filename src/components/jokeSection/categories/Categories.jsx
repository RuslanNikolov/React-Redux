import React, { Component } from 'react'
import './Categories.css'

export default class Categories extends Component {
  render() {
    return (
      <div className="Categories">
      { this.props.categories.map(category => <button className="category">category</button>)}
      </div>
    )
  }
}
