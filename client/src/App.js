
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home"
import Login from "../src/pages/login"
import CreateAccount from './pages/createAccount';

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
