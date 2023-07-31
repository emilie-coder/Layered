import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Thesis from './components/thesisComponent/Thesis';
import Browse from './components/browseComponent/Browse';
import CreatePiece from './components/Pieces/CreatePiece';
import SignedInLink from './components/layout/SignedInLinks';
import SignedOutLink from './components/layout/SignedOutLinks';
import SignInPage from './components/layout/SignInPage';
import SignUpPage from './components/layout/SignUpPage';
import { increment, decrement } from './redux/actions';
import Controls from './components/control';
import { combineReducers } from 'redux';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Redux testing
          <Controls />
        </div>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<div> homepage </div>} />
              <Route path="/Thesis" element={<Thesis />} />
              <Route path="/Browse" element={<Browse />} />
              <Route path="/CreatePiece" element={<CreatePiece />} />
              <Route path="/SignIn" element={<SignInPage />} />
              <Route path="/SignUp" element={<SignUpPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// Mapping the Redux state to component props
const mapStateToProps = (state) => ({
  state: state.counter.value,
});

// Connecting the component to the Redux store and mapDispatchToProps
export default connect(null, { increment, decrement })(App);
