import { recipes } from '../data.js';
import classes from './RecipeGrid.module.css';
import RecipeTile from './RecipeTile';

interface Recipe {
  name: string;
}

export default function RecipeGrid() {
  return (
    <ul className={classes.recipes}>
      {(Object.entries(recipes) as [string, Recipe][]).map(
        ([canonicalName, { name }]) => (
          <RecipeTile
            key={canonicalName}
            name={name}
            canonicalName={canonicalName}
          />
        ),
      )}
    </ul>
  );
}
