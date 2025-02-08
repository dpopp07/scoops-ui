import classes from './RecipeSummary.module.css';

interface Props {
  description: string;
  name: string;
}

export default function RecipeSummary({ description, name }: Props) {
  return (
    <section className={classes.recipeSummary}>
      <h2 className={classes.title}>{name}</h2>
      <p className={classes.subtitle}>Subtitles coming soon...</p>
      <p className={classes.description}>{description}</p>
    </section>
  );
}
