import { ReactNode } from 'react';
import classes from './RecipeSection.module.css';

interface Props {
  children: ReactNode;
  name: string;
}

export default function RecipeSection({ children, name }: Props) {
  return (
    <section className={classes.recipeSection}>
      <h3 className={classes.sectionTitle}>{name}</h3>
      {children}
    </section>
  );
}
