import { useErrorBoundary } from 'react-error-boundary';
import classes from './ErrorFallback.module.css';

export default function ErrorFallback({ error }: { error: Error }) {
  const { resetBoundary } = useErrorBoundary();

  /*
    - style the button - make it blend in and maybe make the border thin or opaque or something
    - maybe block it so it can be stacked on "open an issue"

  */

  return (
    <section className={classes.errorPage}>
      <h4>scOOPS! An error occurred :(</h4>
      <pre>({error.message})</pre>
      <p>The page may load if you...</p>
      <button className={classes.button} onClick={resetBoundary}>
        Try again
      </button>
      <p>
        ... but if the issue persists, please {''}
        <a href="https://github.com">open an issue.</a>
      </p>
    </section>
  );
}
