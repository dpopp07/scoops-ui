import { recipes, ingredients } from '../data.js';

import { ReactNode } from 'react';
import { useParams } from 'wouter';

import classes from './RecipeDetails.module.css';

import { analyze, Analysis, IngredientCategory } from '../utils';
import BackButton from './BackButton';
import RecipeIngredientSection from './RecipeIngredientSection';
import RecipeOrderedList from './RecipeOrderedList';
import RecipeSection from './RecipeSection';
import RecipeSummary from './RecipeSummary';
import RecipeUnorderedList from './RecipeUnorderedList';

const ingredientByName = Object.fromEntries(
  Object.values(ingredients).map((i) => [i.name, i]),
);

const analyzableIngredients = Object.fromEntries(
  Object.values(ingredients).map(({ name, category, data }) => [
    name,
    { category, data },
  ]),
);

export default function RecipeDetails() {
  const { name } = useParams();
  const baseRecipe = recipes[name as string];

  const analysis = analyze(baseRecipe.ingredients, analyzableIngredients);

  const recipe = {
    ...baseRecipe,
    ingredients: baseRecipe.ingredients.map((ingredient) => ({
      ...ingredient,
      category: ingredientByName[ingredient.name]?.category,
      preparation: ingredientByName[ingredient.name]?.preparation,
    })),
    analysis,
  };

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
              key={category}
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
    `PAC: ${round(analysis.pac)}`,
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
