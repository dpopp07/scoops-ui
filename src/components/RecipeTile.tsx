import { Link } from 'wouter';
import classes from './RecipeTile.module.css';

interface Props {
  id: string;
  name: string;
  nameKey: string;
}

export default function RecipeTile({ id, name, nameKey }: Props) {
  return (
    <Link to={`/recipes/${nameKey}`} className={classes.tile} state={{ id }}>
      <li>
        <p className={classes.title}> {name} </p>
      </li>
    </Link>
  );
}
