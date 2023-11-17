
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home"
import Login from "../src/pages/login"

function App() {
  return (
   <div>
    <Login/>
   </div>
  );
}

export default App;
