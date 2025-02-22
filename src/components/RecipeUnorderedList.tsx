import { ReactNode } from 'react';

interface Props {
  items: ReactNode[];
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
