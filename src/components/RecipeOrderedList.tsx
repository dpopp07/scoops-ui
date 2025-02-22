interface Props {
  items: string[];
}

export default function RecipeOrderedList({ items }: Props) {
  return (
    <ol>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}
