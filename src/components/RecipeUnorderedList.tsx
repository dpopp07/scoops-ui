import RecipeSection from './RecipeSection';
import classes from './RecipeSection.module.css';

interface Props {
  items: string[];
  name: string;
}

export default function RecipeUnorderedList({ items, name }: Props) {
  return (
    <RecipeSection>
      <h3 className={classes.sectionTitle}>{name}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </RecipeSection>
  );
}
