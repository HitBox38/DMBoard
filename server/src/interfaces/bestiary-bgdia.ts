export interface bestiary_bgdia {
  name: string;
  source: string;
  page: number;
  size?: string[];
  type?: object;
  alignment?: string[];
  ac?: object[];
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
  immune?: string[];
  conditionImmune?: string[];
  languages?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  familiar?: boolean;
  senseTags?: string[];
  actionTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  hasFluffImages?: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  skill?: object;
  _copy?: object;
  damageTagsLegendary?: undefined[];
  save?: object;
  spellcasting?: object[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  conditionInflictSpell?: string[];
  legendary?: object[];
  traitTags?: string[];
  conditionInflict?: string[];
  reaction?: object[];
  vulnerable?: string[];
}