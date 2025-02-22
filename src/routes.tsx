import { Route, Router, Switch } from 'wouter';
import About from './pages/About';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/recipes/:name" component={Recipe} />
        <Route path="/about" component={About} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
