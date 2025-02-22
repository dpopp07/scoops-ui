import { Link } from 'wouter';
import scoopsLogo from '../assets/logo-blue.svg';
import classes from './MainHeader.module.css';
import NavBar from './NavBar';

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/" className={classes.titleLink}>
          <h1 className={classes.title}>Scoops</h1>
        </Link>
        <img className={classes.logo} src={scoopsLogo} />
        <h6 className={classes.subtitle}>Ice cream recipes and analysis</h6>
      </header>
      <NavBar />
    </>
  );
}
