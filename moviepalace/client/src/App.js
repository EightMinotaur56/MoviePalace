import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='/login' exact Component={Login}></Route>
    </Routes>
  );
}

export default App;
