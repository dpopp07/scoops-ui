import { useEffect, useState } from 'react';
import { useParams } from 'wouter';

import classes from './RecipeDetails.module.css';

import BackButton from './BackButton';
import RecipeOrderedList from './RecipeOrderedList';
import RecipeSummary from './RecipeSummary';
import RecipeUnorderedList from './RecipeUnorderedList';
import Loader from './Loader';

interface RecipeIngredient {
  name: string;
  quantity: number;
}

interface Recipe {
  name: string;
  description: string;
  instructions: string; // TODO: eventually, a list
  ingredients: RecipeIngredient[];
}

export default function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({} as Recipe);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v0/recipes/${id}`,
        );
        const result = await response.json();
        setRecipe(result);
        setIsLoading(false);
        // TODO: 400 errors are not yet handled.
      } catch (error) {
        // TODO: If an error is caught here, the page will be "loading" forever.
        console.log('Error fetching recipes: ', error);
      }
    };

    getRecipe();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.recipeDetails}>
      <BackButton />

      {/* Summary */}
      <RecipeSummary name={recipe.name} description={recipe.description} />

      {/* Ingredients */}
      <RecipeUnorderedList
        items={recipe.ingredients.map(
          ({ name, quantity }) => `${quantity} g, ${name}`,
        )}
      />

      {/* Instructions */}
      <RecipeOrderedList
        items={recipe.instructions
          .split('.')
          .map((s) => s.trim())
          .filter((s) => s !== '')}
      />
    </section>
  );
}
