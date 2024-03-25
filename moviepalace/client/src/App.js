import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={Login} />
    </div>
  );
}

export default App;
