import { ReactNode } from 'react';
import classes from './RecipeSection.module.css';

interface Props {
  children: ReactNode;
}

export default function RecipeSection({ children }: Props) {
  return <section className={classes.recipeSection}>{children}</section>;
}
