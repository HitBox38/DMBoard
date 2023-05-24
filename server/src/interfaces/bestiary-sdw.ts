export interface bestiary_sdw {
  name: string;
  source: string;
  level?: number;
  size: string[];
  type: object;
  ac: object[];
  hp: object;
  speed: object;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  save?: object;
  skill: object;
  passive: number;
  languages?: string[];
  trait: object[];
  action: object[];
  languageTags?: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  alignment?: string[];
  senses?: string[];
  immune?: string[];
  vulnerable?: string[];
  conditionImmune?: string[];
  cr?: string;
  senseTags?: string[];
  hasFluff?: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  spellcasting?: object[];
  legendary?: object[];
  legendaryGroup?: object;
  traitTags?: string[];
  actionTags?: string[];
  damageTagsLegendary?: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  conditionInflict?: string[];
  conditionInflictLegendary?: string[];
  conditionInflictSpell?: string[];
  reaction?: object[];
}