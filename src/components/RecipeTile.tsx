import { Link } from 'wouter';
import classes from './RecipeTile.module.css';

interface Props {
  name: string;
  canonicalName: string;
}

export default function RecipeTile({ name, canonicalName }: Props) {
  return (
    <Link to={`/recipes/${canonicalName}`} className={classes.tile}>
      <li>
        <p className={classes.title}> {name} </p>
      </li>
    </Link>
  );
}
