import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Joke from './pages/Joke'

function App () {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/joke/' component={Joke} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
