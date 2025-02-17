import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useParams } from 'wouter';

import classes from './RecipeDetails.module.css';

import BackButton from './BackButton';
import Loader from './Loader';
import RecipeOrderedList from './RecipeOrderedList';
import RecipeSummary from './RecipeSummary';
import RecipeUnorderedList from './RecipeUnorderedList';

interface RecipeIngredient {
  name: string;
  quantity: number;
}

interface Recipe {
  name: string;
  subtitle: string;
  description: string;
  instructions: string[];
  ingredients: RecipeIngredient[];
}

export default function RecipeDetails() {
  const { id } = useParams();
  const { showBoundary } = useErrorBoundary();

  const [recipe, setRecipe] = useState({} as Recipe);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v0/recipes/${id}`,
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error(
            result.message || `Could not fetch recipe with ID ${id}`,
          );
        }

        setRecipe(result);
        setIsLoading(false);
      } catch (error) {
        showBoundary(error);
      }
    };

    getRecipe();
  }, [id, showBoundary]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.recipeDetails}>
      <BackButton />

      {/* Summary */}
      <RecipeSummary
        name={recipe.name}
        description={recipe.description}
        subtitle={recipe.subtitle}
      />

      {/* Ingredients */}
      <RecipeUnorderedList
        items={recipe.ingredients.map(
          ({ name, quantity }) => `${quantity} g, ${name}`,
        )}
      />

      {/* Instructions */}
      <RecipeOrderedList items={recipe.instructions} />
    </section>
  );
}
