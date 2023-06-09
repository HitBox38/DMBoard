export interface bestiary_wdmm {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  _copy?: object;
  hasToken: boolean;
  size?: string[];
  type?: string;
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
  senses?: string[];
  passive?: number;
  immune?: string[];
  conditionImmune?: string[];
  cr?: string;
  action?: object[];
  senseTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  hasFluff?: boolean;
  resist?: string[];
  languages?: string[];
  trait?: object[];
  languageTags?: string[];
  conditionInflict?: string[];
  traitTags?: string[];
  spellcasting?: object[];
  damageTagsLegendary?: undefined[];
  damageTagsSpell?: string[];
  hasFluffImages?: boolean;
  spellcastingTags?: string[];
  save?: object;
  actionTags?: string[];
  legendaryGroup?: object;
  skill?: object;
  legendary?: object[];
  conditionInflictSpell?: string[];
  reaction?: object[];
  vulnerable?: string[];
  group?: string[];
}
