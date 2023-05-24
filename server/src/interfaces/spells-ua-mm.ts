export interface spells_ua_mm {
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  time: object[];
  range: object;
  components: object;
  duration: object[];
  meta?: object;
  entries: string[];
  entriesHigherLevel?: object[];
  abilityCheck?: string[];
  miscTags?: string[];
  damageInflict?: string[];
  savingThrow?: string[];
  areaTags?: string[];
}
