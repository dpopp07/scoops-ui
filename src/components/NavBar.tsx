import InternalLink from './InternalLink';
import classes from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <InternalLink noUnderline={true} text="Home" path="/" />
      <InternalLink noUnderline={true} text="About" path="/about" />
    </nav>
  );
}
