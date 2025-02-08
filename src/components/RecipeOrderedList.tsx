import RecipeSection from './RecipeSection';
import classes from './RecipeSection.module.css';

export default function RecipeOrderedList() {
  return (
    <RecipeSection>
      <h3 className={classes.sectionTitle}>Instructions</h3>
      <ol>
        <li>Prepare solids</li>
        <li>Heat dairy</li>
        <li>Stir in solids</li>
        <li>Cook to 165 F</li>
        <li>Strain into ice bath</li>
        <li>Store in fridge</li>
        <li>Churn with machine</li>
      </ol>
    </RecipeSection>
  );
}
