import React, {Component} from 'react';
import Home from './Home.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    <Route path="/.well-known/acme-challenge/:hash" render={() => <div>X4VZlDFr1sEtwZEDlbKYqLzwEPpXEhnIBwPSPG9zkCM.BB95YhjjV0rrfAxwNiQ4NL6zfZolmxs3BbsUpGkbANo</div>} />
    </div>
  </Router>
);

export default App
