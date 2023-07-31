import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class MyPieces extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className = "mycollections-container">
            My Pieces
        </div>
      </BrowserRouter>
    )
  }
}

export default MyPieces;
