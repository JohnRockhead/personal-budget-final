import React from 'react';
import './App.css';

import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";

import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';

function App() {
  return (
    <Router>
      
      <Nav/>
      <div>
        <Switch>
          <Route path="/">
            <HomePage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/signup">
            <SignupPage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
