import React, { Component } from 'react';
import MyCollections from '../Collection/MyCollections';
import MyPieces from '../Pieces/MyPieces';

class Dashboard extends Component {
  render () {
    return (
        <div className = "dashboard-container">
            DASHBOARD
            <MyCollections />
            <MyPieces />
        </div>
    )
  }
}

export default Dashboard;
