export interface decks {
  name: string;
  source: string;
  cards: object[];
  entries?: string[];
  hasCardArt?: boolean;
  page?: number;
  srd?: boolean;
  back?: object;
  _copy?: object;
}
