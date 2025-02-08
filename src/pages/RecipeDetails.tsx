import BackButton from '../components/BackButton';
import MainHeader from '../components/MainHeader';
import RecipeOrderedList from '../components/RecipeOrderedList';
import RecipeSummary from '../components/RecipeSummary';
import RecipeUnorderedList from '../components/RecipeUnorderedList';

/*!!!
 *
 * see if i can give this whole section an extra left margin or padding
 * instead of adding it in a bunch of individual elements
 *
 * loading in api data will be tricky - will likely need to redesign
 * how i populate this component
 *
 * */

export default function RecipeDetails() {
  return (
    <>
      <MainHeader />
      <BackButton />
      <RecipeSummary />
      <RecipeUnorderedList />
      <RecipeOrderedList />
    </>
  );
}
