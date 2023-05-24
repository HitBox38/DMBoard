export interface bestiary_toa {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  size?: string[];
  type?: string;
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
  save?: object;
  skill?: object;
  senses?: string[];
  passive?: number;
  resist?: string[];
  immune?: string[];
  conditionImmune?: string[];
  languages?: string[];
  cr?: string;
  spellcasting?: object[];
  trait?: object[];
  action?: object[];
  legendary?: object[];
  traitTags?: string[];
  senseTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  conditionInflictSpell?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  hasFluffImages?: boolean;
  actionTags?: string[];
  familiar?: boolean;
  otherSources?: object[];
  vulnerable?: string[];
  _copy?: object;
  reaction?: object[];
}