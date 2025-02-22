import classes from './RecipeIngredientSection.module.css';
import RecipeUnorderedList from './RecipeUnorderedList';

// TODO: these are duplicated everywhere and it's atrocious.
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
}

interface Props {
  category: string;
  ingredients: RecipeIngredient[];
}

export default function RecipeIngredientSection({
  category,
  ingredients,
}: Props) {
  return (
    <section>
      <h6 className={classes.categoryTitle}>{category}</h6>
      <RecipeUnorderedList
        items={ingredients.map(
          ({ name, quantity, unit }) =>
            // TODO: smarter logic to determine spacing, don't
            // want it in the case of percentages, etc.
            `${quantity}${unit ? ` ${unit}` : ''}, ${name}`,
        )}
      />
    </section>
  );
}
