import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/login'; 
import Register from './Pages/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPass from './Pages/forgotten-password';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotten-password" element={<ForgotPass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
