import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';

const App = () => {
  return (
  
  <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
