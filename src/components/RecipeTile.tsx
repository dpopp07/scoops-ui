import { Link } from 'wouter';
import classes from './RecipeTile.module.css';

interface Props {
  id: string;
  name: string;
}

export default function RecipeTile({ id, name }: Props) {
  return (
    <Link to={`/recipes/${id}`} className={classes.tile}>
      <li>
        <p className={classes.title}> {name} </p>
      </li>
    </Link>
  );
}
