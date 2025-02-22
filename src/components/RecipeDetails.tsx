import { ReactNode, useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useParams } from 'wouter';

import classes from './RecipeDetails.module.css';

import BackButton from './BackButton';
import Loader from './Loader';
import RecipeIngredientSection from './RecipeIngredientSection';
import RecipeOrderedList from './RecipeOrderedList';
import RecipeSection from './RecipeSection';
import RecipeSummary from './RecipeSummary';
import RecipeUnorderedList from './RecipeUnorderedList';

enum IngredientCategory {
  Solids = 'solids',
  Dairy = 'dairy',
  Other = 'other',
  Steeping = 'steeping',
  Finishing = 'finishing',
  Churning = 'churning',
  Drawing = 'drawing',
}

interface IngredientPrep {
  description: string;
  ingredients: {
    // TODO: Make this an interface
    name: string;
    quantity: number;
    unit?: string;
  }[];
  instructions: string[];
}

interface RecipeIngredient {
  name: string;
  quantity: number;
  unit?: string;
  preparation?: IngredientPrep;
  category: IngredientCategory;
}

interface Analysis {
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
      <RecipeSection name="Ingredients">
        {Object.values(IngredientCategory).reduce((elems, category) => {
          // Don't include any sections for categories that
          // don't have any associated ingredients.
          if (!recipe.ingredients.some((i) => i.category === category)) {
            return elems;
          }

          return [
            ...elems,
            <RecipeIngredientSection
              category={capitalize(category)}
              ingredients={recipe.ingredients.filter(
                (i) => i.category === category,
              )}
            />,
          ];
        }, [] as ReactNode[])}
      </RecipeSection>

      {/* Instructions */}
      <RecipeSection name="Instructions">
        <RecipeOrderedList items={recipe.instructions} />
      </RecipeSection>

      {/* Analysis */}
      <RecipeSection name="Analysis">
        <RecipeUnorderedList items={formatAnalysis(recipe.analysis)} />
      </RecipeSection>
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

function capitalize(val: string): string {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
