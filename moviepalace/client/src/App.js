import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/register'
import MovieScreen from './Pages/MovieScreen';
import Confirmation from './Pages/Confirmation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPass from './Pages/forgotten-password';
import OnClick from './Pages/onClick';

function App() {
  return (
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotten-password" element={<ForgotPass />} />
          <Route path="/movie/:id" element={<MovieScreen />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/onclick" element={<OnClick />} />


        </Routes>
      </div>
  );
}

export default App;
