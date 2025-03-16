import classes from './About.module.css';

export default function About() {
  return (
    <>
      <h3>About Scoops</h3>
      <p className={classes.text}>
        A place to share ice cream recipes I've developed alongside the data
        that drives them.
      </p>
      <h3 id="about-analysis">What is analysis?</h3>
      <p className={classes.text}>Coming soon...</p>
    </>
  );
}
