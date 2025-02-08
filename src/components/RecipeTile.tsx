import classes from './RecipeTile.module.css';

// !!! define type for input
export default function RecipeTile({ name }) {
  return (
    <li className={classes.recipe}>
      <p className={classes.title}> {name} </p>
    </li>
  );
}
