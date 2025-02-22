interface Props {
  items: string[];
}

export default function RecipeUnorderedList({ items }: Props) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
