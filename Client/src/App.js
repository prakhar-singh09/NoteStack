import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav-bar';
import HomePage from './components/HomePage';
import Notes from './components/Notes';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup'
import Alert from './components/Alert';
import NoteState from './context/Notes/NoteState';
import AlertState from './context/alerts/AlertState';


function App() {
  return (
  <AlertState>
   <NoteState>
    <Router>
      <Navbar />
      <Alert/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />        
      </Routes>
    </Router>
    </NoteState>
  </AlertState>
  );
}

export default App;
