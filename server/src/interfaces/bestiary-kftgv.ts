export interface bestiary_kftgv {
  name: string;
  source: string;
  page?: number;
  _copy?: object;
  type?: string;
  immune?: string[];
  conditionImmune?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  alignment?: string[];
  resist?: string[];
  size?: string[];
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
  skill?: object;
  passive?: number;
  languages?: string[];
  cr?: string;
  spellcasting?: object[];
  trait?: object[];
  action?: object[];
  reaction?: object[];
  traitTags?: string[];
  actionTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  spellcastingTags?: string[];
  miscTags?: string[];
  conditionInflictSpell?: string[];
  bonus?: object[];
  conditionInflict?: string[];
  senses?: string[];
  senseTags?: string[];
  hasFluffImages?: boolean;
  damageTagsSpell?: string[];
}
