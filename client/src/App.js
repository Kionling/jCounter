import logo from './logo.svg';
import React, { useRef } from 'react';

import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
