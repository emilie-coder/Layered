import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends Component {
  render () {
    return (
      <ul classname="right">
        <li><NavLink to='/'>Sign in</NavLink></li>
        <li><NavLink to='/'>Sign up</NavLink></li>
        <li><NavLink to='/'>Thesis Research</NavLink></li>
        <li><NavLink to='/'>Browse</NavLink></li>
      </ul>
    )
  }
}

export default SignedOutLinks;
