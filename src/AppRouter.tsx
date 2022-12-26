import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Dashboard } from './components/Dashboard';
import { Joke } from './components/Joke';

export function AppRouter() {
  return (
    <div className="container">
      <Router basename="/joker-norris">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/joke" component={Joke} />
        </Switch>
      </Router>
    </div>
  );
}
