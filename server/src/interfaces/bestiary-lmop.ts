export interface bestiary_lmop {
  name: string;
  source: string;
  page: number;
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
  save?: object;
  senses?: string[];
  passive?: number;
  immune?: string[];
  conditionImmune?: string[];
  languages?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  traitTags?: string[];
  senseTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  otherSources?: object[];
  skill?: object;
  spellcasting?: object[];
  altArt?: object[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  isNpc?: boolean;
  isNamedCreature?: boolean;
  _copy?: object;
  resist?: string[];
  hasFluffImages?: boolean;
  conditionInflictSpell?: string[];
  actionTags?: string[];
  reaction?: object[];
}
