import RecipeSection from './RecipeSection';
import classes from './RecipeSection.module.css';

export default function RecipeUnorderedList() {
  return (
    <RecipeSection>
      <h3 className={classes.sectionTitle}>Ingredients</h3>
      <ul>
        <li>450 g, Whole Milk</li>
        <li>300 g, Heavy Cream</li>
        <li>60 g, Sugar</li>
        <li>60 g, Dextrose</li>
        <li>60 g, Milk Powder</li>
        <li>1.5 g, Stabilizers</li>
        <li>1.5 g, Kosher salt</li>
        <li>7 g, Vanilla paste</li>
      </ul>
    </RecipeSection>
  );
}
