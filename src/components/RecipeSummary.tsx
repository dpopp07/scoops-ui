import classes from './RecipeSummary.module.css';

export default function RecipeSummary() {
  return (
    <section className={classes.recipeSummary}>
      <h2 className={classes.title}>Vanilla</h2>
      <p className={classes.subtitle}>Pure vanilla bean, simple and classic</p>
      <p className={classes.description}>
        Vanilla is one of the most complex spices in the world, yet few things
        are as paradoxiacally simple as a classic Vanilla ice cream. Smooth,
        creamy, and delicious - it will never get old!
      </p>
    </section>
  );
}
