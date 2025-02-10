import { ErrorBoundary } from 'react-error-boundary';
import RecipeGrid from '../components/RecipeGrid';
import ErrorFallback from '../components/ErrorFallback';

export default function Landing() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecipeGrid />
    </ErrorBoundary>
  );
}
