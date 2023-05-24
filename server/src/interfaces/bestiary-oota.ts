export interface bestiary_oota {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  _copy?: object;
  type?: object;
  ac?: number[];
  hasToken: boolean;
  hasFluffImages?: boolean;
  alignment?: string[];
  damageTags?: string[];
  traitTags?: string[];
  spellcastingTags?: string[];
  size?: string[];
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
  resist?: string[];
  vulnerable?: string[];
  languages?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  senseTags?: string[];
  miscTags?: string[];
  hasFluff?: boolean;
  languageTags?: string[];
  conditionInflict?: string[];
  actionTags?: string[];
  immune?: string[];
  conditionImmune?: string[];
  save?: object;
  reaction?: object[];
  reprintedAs?: string[];
  skill?: object;
  spellcasting?: object[];
  damageTagsSpell?: string[];
  conditionInflictSpell?: string[];
  damageTagsLegendary?: undefined[];
  legendaryActions?: number;
  legendary?: object[];
}