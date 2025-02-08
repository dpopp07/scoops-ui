import RecipeSection from './RecipeSection';
import classes from './RecipeSection.module.css';

interface Props {
  items: string[];
}

export default function RecipeOrderedList({ items }: Props) {
  return (
    <RecipeSection>
      <h3 className={classes.sectionTitle}>Instructions</h3>
      <ol>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </RecipeSection>
  );
}
