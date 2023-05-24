export interface spells_tce {
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
  spellAttack?: string[];
  miscTags?: string[];
  areaTags?: string[];
  scalingLevelDice?: object[];
  conditionInflict?: string[];
  hasFluff?: boolean;
  entriesHigherLevel?: object[];
  damageResist?: string[];
  hasFluffImages?: boolean;
  savingThrow?: string[];
  damageImmune?: string[];
  conditionImmune?: string[];
}
