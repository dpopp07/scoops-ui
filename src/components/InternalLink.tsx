import { Link } from 'wouter';
import classes from './InternalLink.module.css';

interface Props {
  path: string;
  text: string;
  noUnderline?: boolean;
}

export default function InternalLink({ path, text, noUnderline }: Props) {
  const inlineStyle = noUnderline ? { textDecoration: 'none' } : {};
  return (
    <Link to={path} className={classes.link} style={inlineStyle}>
      {text}
    </Link>
  );
}
