import { Link } from 'wouter';
import classes from './InternalLink.module.css';

interface Props {
  path: string;
  text: string;
}

export default function InternalLink({ path, text }: Props) {
  return (
    <Link to={path} className={classes.link}>
      {text}
    </Link>
  );
}
