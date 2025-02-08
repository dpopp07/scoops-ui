import RecipeTile from './RecipeTile';
import classes from './RecipeGrid.module.css';

interface Recipe {
  name: string;
}

export default function RecipeGrid() {
  const recipes: Recipe[] = [
    { name: 'Vanilla' },
    { name: 'Chocolate' },
    { name: 'Mint Chocolate Chip' },
    { name: 'Butter Pecan' },
  ]; // Make IDs

  return (
    <ul className={classes.recipes}>
      {recipes.map(({ name }) => (
        <RecipeTile name={name} key={name} />
      ))}
    </ul>
  );
}
