export interface bestiary_pota {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  size?: string[];
  type?: object;
  alignment?: string[];
  ac?: number[];
  hp?: object;
  speed?: object;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  skill?: object;
  senses?: string[];
  passive?: number;
  resist?: string[];
  languages?: string[];
  cr?: string;
  spellcasting?: object[];
  trait?: object[];
  action?: object[];
  legendaryGroup?: object;
  traitTags?: string[];
  senseTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  miscTags?: string[];
  conditionInflictSpell?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  hasFluffImages?: boolean;
  _copy?: object;
  reaction?: object[];
  actionTags?: string[];
  otherSources?: object[];
  immune?: string[];
  conditionInflict?: string[];
  damageTagsLegendary?: string[];
  save?: object;
  conditionImmune?: string[];
  legendary?: object[];
  conditionInflictLegendary?: string[];
  vulnerable?: string[];
}