export interface bestiary_ftd {
  name: string;
  group?: string[];
  source: string;
  page: number;
  size: string[];
  type: object;
  alignment?: string[];
  alignmentPrefix?: string;
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
  skill?: object;
  senses?: string[];
  passive: number;
  resist?: string[];
  conditionImmune?: string[];
  languages?: string[];
  cr?: object;
  spellcasting?: object[];
  trait?: object[];
  action: object[];
  bonus?: object[];
  legendary?: object[];
  legendaryGroup?: object;
  variant?: object[];
  dragonAge?: string;
  traitTags?: string[];
  senseTags?: string[];
  actionTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  conditionInflictLegendary?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  hasFluffImages?: boolean;
  damageTagsLegendary?: string[];
  conditionInflictSpell?: string[];
  dragonCastingColor?: string;
  immune?: string[];
  mythicHeader?: string[];
  mythic?: object[];
  reaction?: object[];
  summonedBySpell?: string;
  summonedBySpellLevel?: number;
  pbNote?: string;
  summonedByClass?: string;
}
