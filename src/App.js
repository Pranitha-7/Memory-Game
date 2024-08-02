import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Easy from './Easy';
import Medium from './Medium';
import Hard from './Hard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;