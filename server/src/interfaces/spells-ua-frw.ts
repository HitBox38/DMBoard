export interface spells_ua_frw {
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
  savingThrow?: string[];
  miscTags?: string[];
  areaTags?: string[];
  damageInflict?: string[];
  conditionInflict?: string[];
  scalingLevelDice?: object;
  entriesHigherLevel?: object[];
}
