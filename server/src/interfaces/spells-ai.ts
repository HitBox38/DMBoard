export interface spells_ai {
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
  conditionInflict?: string[];
  savingThrow?: string[];
  affectsCreatureType?: string[];
  miscTags?: string[];
  areaTags?: string[];
  damageInflict?: string[];
  spellAttack?: string[];
}
