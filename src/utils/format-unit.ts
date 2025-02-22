export function formatUnit(unit: string | undefined): string {
  if (!unit) {
    return '';
  }

  if (unit.startsWith('%')) {
    return `${unit},`;
  }

  return ` ${unit},`;
}
