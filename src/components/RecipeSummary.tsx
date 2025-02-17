import classes from './RecipeSummary.module.css';

interface Props {
  description: string;
  name: string;
  subtitle: string;
}

export default function RecipeSummary({ description, name, subtitle }: Props) {
  return (
    <section className={classes.recipeSummary}>
      <h2 className={classes.title}>{name}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
      <p className={classes.description}>{description}</p>
    </section>
  );
}
