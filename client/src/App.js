
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from "./pages/home"
import Login from "../src/pages/login"
import CreateAccount from './pages/createAccount';
import NotFound from './pages/notFound';

function App() {
  return (
   <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<CreateAccount/>}/>
        <Route path='*' element={<NotFound/>}/> {/* Add the 404 route */}
        <Route path='/' element={<Home/>}/> {/* Move the home route to the end */}
      </Routes>
    </Router>
   </div>
  );
}

export default App;
