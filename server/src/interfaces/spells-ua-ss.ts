export interface spells_ua_ss {
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
  conditionInflict?: string[];
  savingThrow?: string[];
  miscTags?: string[];
  areaTags?: string[];
  meta?: object;
  affectsCreatureType?: string[];
  entriesHigherLevel?: object[];
  damageInflict?: string[];
  spellAttack?: string[];
  scalingLevelDice?: object;
  abilityCheck?: string[];
}
