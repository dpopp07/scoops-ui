import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { Named } from '../utils';
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
        const headers = new Headers();
        headers.append(
          'Authorization',
          `Bearer ${import.meta.env.VITE_API_KEY}`,
        );
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v0/recipes/`,
          {
            headers,
          },
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || 'Could not fetch recipes');
        }

        // For now, sort recipes in alphabetical order.
        result.recipes.sort((a: Named, b: Named) => (a.name < b.name ? -1 : 1));

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
      {recipes.map(({ id, name, canonicalName }) => (
        <RecipeTile name={name} key={id} canonicalName={canonicalName} />
      ))}
    </ul>
  );
}
