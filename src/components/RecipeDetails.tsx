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

export interface Analysis {
  totalFat: number;
  milkFat: number;
  totalSolids: number;
  totalSolidsNonfat: number;
  milkSolidsNonfat: number;
  water: number;
  sugars: number;
  totalMass: number;
  pod: number;
  pac: number;
  stabilizers: number;
}

interface Recipe {
  name: string;
  subtitle: string;
  description: string;
  instructions: string[];
  ingredients: RecipeIngredient[];
  analysis: Analysis;
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
        name="Ingredients"
        items={recipe.ingredients.map(
          ({ name, quantity }) => `${quantity} g, ${name}`,
        )}
      />

      {/* Instructions */}
      <RecipeOrderedList items={recipe.instructions} />

      {/* Analysis */}
      <RecipeUnorderedList
        name="Analysis"
        items={formatAnalysis(recipe.analysis)}
      />
    </section>
  );
}

function formatAnalysis(analysis: Analysis): string[] {
  const { totalMass } = analysis;

  return [
    `Total Mass: ${totalMass} g`,
    `POD: ${round(analysis.pod)}`,
    `PAC: ${round(analysis.pod)}`,
    `Milk Fat: ${getPercentage(analysis.milkFat, totalMass)}`,
    `Total Fat: ${getPercentage(analysis.totalFat, totalMass)}`,
    `Milk Solids Nonfat: ${getPercentage(analysis.milkSolidsNonfat, totalMass)}`,
    `Total Solids Nonfat: ${getPercentage(analysis.totalSolidsNonfat, totalMass)}`,
    `Sugars: ${getPercentage(analysis.sugars, totalMass)}`,
    `Stabilizers: ${getPrecisePercentage(analysis.stabilizers, totalMass)}`,
    `Total Solids: ${getPercentage(analysis.totalSolids, totalMass)}`,
    `Water: ${getPercentage(analysis.water, totalMass)}`,
  ];
}

function getPercentage(value: number, total: number): string {
  return `${round((value / total) * 100)}%`;
}

function getPrecisePercentage(value: number, total: number): string {
  return `${((value / total) * 100).toFixed(2)}%`;
}

function round(value: number): string {
  return value.toFixed(0);
}
