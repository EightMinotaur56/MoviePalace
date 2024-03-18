import './App.css';
import {React} from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/login';

function App() {
  return (
    <div>
      <Route path="/" exact Component={HomePage}></Route>
      <Route path="/login" exact Component={LoginPage}></Route>
    </div>
  );
}

export default App;
