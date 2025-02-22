import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import Loader from './Loader';
import classes from './RecipeGrid.module.css';
import RecipeTile from './RecipeTile';

export default function RecipeGrid() {
  const { showBoundary } = useErrorBoundary();

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v0/recipes/');
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || 'Could not fetch recipes');
        }

        setRecipes(result.recipes);
        setIsLoading(false);
      } catch (error) {
        showBoundary(error);
      }
    };

    getRecipes();
  }, [showBoundary]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={classes.recipes}>
      {recipes.map(({ id, name, nameKey }) => (
        <RecipeTile name={name} key={id} id={id} nameKey={nameKey} />
      ))}
    </ul>
  );
}
