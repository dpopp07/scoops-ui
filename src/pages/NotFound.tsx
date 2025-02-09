import MainHeader from '../components/MainHeader';
import classes from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <MainHeader />
      <h5 className={classes.h5}>
        This is not the page you are looking for...
      </h5>
    </>
  );
}
