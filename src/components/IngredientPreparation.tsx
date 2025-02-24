import { formatUnit, Preparation } from '../utils';
import classes from './IngredientPreparation.module.css';
import RecipeOrderedList from './RecipeOrderedList';
import RecipeSection from './RecipeSection';
import RecipeSummary from './RecipeSummary';
import RecipeUnorderedList from './RecipeUnorderedList';

interface Props {
  name: string;
  prep: Preparation;
}

export default function IngredientPreparation({ name, prep }: Props) {
  const { description, ingredients, instructions } = prep;

  return (
    <section className={classes.ingredientPrep}>
      {/* Summary */}
      <RecipeSummary name={name} description={description} />

      {/* Ingredients */}
      <RecipeSection name="Ingredients">
        <RecipeUnorderedList
          items={ingredients.map(
            ({ name, quantity, unit }) =>
              `${quantity}${formatUnit(unit)} ${name}`,
          )}
        />
      </RecipeSection>

      {/* Instructions */}
      <RecipeSection name="Instructions">
        <RecipeOrderedList items={instructions} />
      </RecipeSection>
    </section>
  );
}
