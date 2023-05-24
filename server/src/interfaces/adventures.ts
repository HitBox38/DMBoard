export interface adventures {
  name: string;
  id: string;
  source: string;
  group: string;
  coverUrl: string;
  published: string;
  storyline: string;
  level: object;
  contents: object[];
  parentSource?: string;
  publishedOrder?: number;
  alias?: string[];
}
