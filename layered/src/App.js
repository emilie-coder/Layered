import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Thesis from './components/thesisComponent/Thesis';
import Browse from './components/browseComponent/Browse';
import CreatePiece from './components/Pieces/CreatePiece';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<div> homepage </div>} />
            <Route path="/Thesis" element={<Thesis />} />
            <Route path="/Browse" element={<Browse />} />
            <Route path="/CreatePiece" element={<CreatePiece />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
