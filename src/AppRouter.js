import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Joke from './pages/joke'

function App() {
  return (
    <div className="container">
      <Router basename='/joker-norris'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/joke/' component={Joke} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
