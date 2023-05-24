export interface spells_egw {
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
  conditionInflict?: string[];
  savingThrow?: string[];
  miscTags?: string[];
  areaTags: string[];
  hasFluffImages?: boolean;
  entriesHigherLevel?: object[];
  abilityCheck?: string[];
  scalingLevelDice?: object;
  meta?: object;
}
