import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {
  render () {
    return (
      <ul classname="right">
        <li><NavLink to='/'>Dashboard</NavLink></li>
        <li><NavLink to='/'>Create</NavLink></li>
        <li><NavLink to='/'>Sign Out</NavLink></li>
        <li><NavLink to='/'>Thesis Research</NavLink></li>
        <li><NavLink to='/'>Browse</NavLink></li>
      </ul>
    )
  }
}

export default SignedInLinks;
