import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class MyCollections extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className = "mycollections-container">
            My Collections
        </div>
      </BrowserRouter>
    )
  }
}

export default MyCollections;
