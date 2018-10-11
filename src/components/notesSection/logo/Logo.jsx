import React, { Component } from 'react'
import LogoIcon from '../../../assets/imgs/logo.png';
import './Logo.css';


export default class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <p className="logo-text">NOTE<br/>TOWN</p>
        <img src={LogoIcon} className="Logo" />
      </div>
    )
  }
}
