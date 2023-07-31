import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyPieceList from './PieceList';

class MyPieces extends Component {


  render () {

    const { projects } = this.props;

    return (
        <div className = "mycollections-container">
            My Pieces
            <MyPieceList projects={projects} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  }
}
export default connect(mapStateToProps)(MyPieces);
