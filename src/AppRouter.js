import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import {Dashboard} from './components/Dashboard'
import Joke from './pages/Joke'
import 'bootstrap/dist/css/bootstrap.css';

function App () {
  return (
    <div className="container">
      <Router basename='/joker-norris'>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/" exact component={Home} /> */}
          <Route path='/joke/' component={Joke} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
