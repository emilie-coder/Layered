import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyCollections from '../Collection/MyCollections';
import MyPieces from '../Pieces/MyPieces';

class Dashboard extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className = "dashboard-container">
            DASHBOARD
            <MyCollections />
            <MyPieces />
        </div>
      </BrowserRouter>
    )
  }
}

export default Dashboard;
