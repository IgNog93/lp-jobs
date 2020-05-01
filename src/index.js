import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
</Router>,
  document.getElementById('root')
);
