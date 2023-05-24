export interface recipes {
  name: string;
  source: string;
  page: number;
  type: string;
  dishTypes: string[];
  diet: string;
  serves?: object;
  ingredients: object[];
  instructions: string[];
  hasFluff: boolean;
  hasFluffImages?: boolean;
  allergenGroups?: string[];
  miscTags?: string[];
  noteCook?: string[];
  makes?: string;
}
