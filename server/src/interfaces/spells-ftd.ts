export interface spells_ftd {
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
  damageInflict?: string[];
  miscTags?: string[];
  hasFluffImages?: boolean;
  savingThrow?: string[];
  conditionInflict?: string[];
  areaTags?: string[];
}
