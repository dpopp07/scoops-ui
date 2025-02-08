import { Route, Router, Switch } from 'wouter';
import Landing from './pages/Landing';
import RecipeDetails from './pages/RecipeDetails';

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
        <Route path="/recipe" component={RecipeDetails} />
        <Route>
          <Custom404 />
        </Route>
      </Switch>
    </Router>
  );
}

function Custom404() {
  return <div>Page not found</div>;
}
