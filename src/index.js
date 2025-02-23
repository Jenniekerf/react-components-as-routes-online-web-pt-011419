import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </divt>
  </Router>),
  document.getElementById('root')
);
