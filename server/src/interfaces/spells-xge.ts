export interface spells_xge {
  name: string;
  source: string;
  page: number;
  otherSources?: object[];
  level: number;
  school: string;
  time: object[];
  range: object;
  components: object;
  duration: object[];
  entries: string[];
  damageInflict?: string[];
  savingThrow?: string[];
  areaTags?: string[];
  entriesHigherLevel?: object[];
  damageResist?: string[];
  conditionInflict?: string[];
  affectsCreatureType?: string[];
  miscTags?: string[];
  abilityCheck?: string[];
  meta?: object;
  spellAttack?: string[];
  hasFluffImages?: boolean;
  scalingLevelDice?: object;
  additionalSources?: object[];
  damageImmune?: string[];
}
