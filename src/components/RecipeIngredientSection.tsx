import { RecipeIngredient as IRecipeIngredient } from '../utils';
import RecipeIngredient from './RecipeIngredient';
import classes from './RecipeIngredientSection.module.css';
import RecipeUnorderedList from './RecipeUnorderedList';

interface Props {
  category: string;
  ingredients: IRecipeIngredient[];
}

export default function RecipeIngredientSection({
  category,
  ingredients,
}: Props) {
  return (
    <section>
      <h6 className={classes.categoryTitle}>{category}</h6>
      <RecipeUnorderedList
        items={ingredients.map((i) => (
          <RecipeIngredient ingredient={i} />
        ))}
      />
    </section>
  );
}
