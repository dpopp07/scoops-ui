import { Route, Router, Switch } from 'wouter';
import Landing from './pages/Landing';
import RecipeDetails from './pages/RecipeDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

/*
    !!!

    Rename this file, better organize
    Can I use nested routes to get the main header included everywhere by default?
*/

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/about" component={About} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
