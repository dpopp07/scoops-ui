import classes from './RecipeOrderedList.module.css';

interface Props {
  items: string[];
}

export default function RecipeOrderedList({ items }: Props) {
  return (
    <ol className={classes.list}>
      {items.map((item, i) => (
        <li className={classes.item} key={i}>
          {item}
        </li>
      ))}
    </ol>
  );
}
