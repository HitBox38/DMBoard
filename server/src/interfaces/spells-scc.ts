export interface spells_scc {
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
  damageInflict?: string[];
  miscTags?: string[];
  areaTags?: string[];
  entriesHigherLevel?: object[];
  savingThrow?: string[];
}
