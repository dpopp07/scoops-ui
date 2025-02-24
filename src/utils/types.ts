export enum IngredientCategory {
  Solids = 'solids',
  Dairy = 'dairy',
  Other = 'other',
  Steeping = 'steeping',
  Finishing = 'finishing',
  Churning = 'churning',
  Drawing = 'drawing',
}

export interface Preparation {
  description: string;
  ingredients: RecipeIngredientSummary[];
  instructions: string[];
}

interface RecipeIngredientSummary extends Named {
  quantity: number;
  unit?: string;
}

export interface RecipeIngredient extends RecipeIngredientSummary {
  preparation?: Preparation;
  category: IngredientCategory;
}

export interface Analysis {
  totalFat: number;
  milkFat: number;
  totalSolids: number;
  totalSolidsNonfat: number;
  milkSolidsNonfat: number;
  water: number;
  sugars: number;
  totalMass: number;
  pod: number;
  pac: number;
  stabilizers: number;
}

export interface Recipe extends Preparation {
  name: string;
  subtitle: string;
  ingredients: RecipeIngredient[];
  analysis: Analysis;
}

export interface Named {
  name: string;
}
