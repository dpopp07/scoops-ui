import { Link } from 'wouter';
import classes from './RecipeTile.module.css';

interface Props {
  name: string;
  nameKey: string;
}

export default function RecipeTile({ name, nameKey }: Props) {
  return (
    <Link to={`/recipes/${nameKey}`} className={classes.tile}>
      <li>
        <p className={classes.title}> {name} </p>
      </li>
    </Link>
  );
}
