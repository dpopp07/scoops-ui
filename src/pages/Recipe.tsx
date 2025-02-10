import { ErrorBoundary } from 'react-error-boundary';
import RecipeDetails from '../components/RecipeDetails';
import ErrorFallback from '../components/ErrorFallback';

export default function Recipe() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecipeDetails />
    </ErrorBoundary>
  );
}
