export interface bestiary_gos {
  name: string;
  source: string;
  page: number;
  otherSources?: object[];
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
  skill?: object;
  senses?: string[];
  passive?: number;
  cr?: string;
  trait?: object[];
  action?: object[];
  altArt?: object[];
  senseTags?: string[];
  actionTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  _copy?: object;
  languages?: string[];
  languageTags?: string[];
  save?: object;
  traitTags?: string[];
  conditionInflict?: string[];
  shortName?: string;
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  hasFluffImages?: boolean;
  immune?: string[];
  conditionImmune?: string[];
  reaction?: object[];
  resist?: object[];
  legendary?: object[];
  spellcasting?: object[];
  vulnerable?: string[];
  conditionInflictSpell?: string[];
}
