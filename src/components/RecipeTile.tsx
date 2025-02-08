import { Link } from 'wouter';
import classes from './RecipeTile.module.css';

interface Props {
  name: string;
}

export default function RecipeTile({ name }: Props) {
  return (
    <Link to="/recipe" className={classes.tileLink}>
      <li className={classes.recipe}>
        <p className={classes.title}> {name} </p>
      </li>
    </Link>
  );
}
