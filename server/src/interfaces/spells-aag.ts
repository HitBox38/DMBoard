export interface spells_aag {
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  time: object[];
  range: object;
  components: object;
  duration: object[];
  entries: string[];
  entriesHigherLevel?: object[];
  miscTags?: string[];
  hasFluffImages?: boolean;
}
