export interface bestiary_jttrc {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  _copy?: object;
  alignment?: string[];
  traitTags?: string[];
  hasToken: boolean;
  hasFluffImages?: boolean;
  type?: object;
  size?: string[];
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
  conditionImmune?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  senseTags?: string[];
  actionTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  hasFluff?: boolean;
  alignmentPrefix?: string;
  resist?: string[];
  languages?: string[];
  legendary?: object[];
  languageTags?: string[];
  immune?: string[];
  vulnerable?: string[];
  bonus?: object[];
  spellcastingTags?: string[];
  spellcasting?: object[];
  legendaryGroup?: object;
  reaction?: object[];
}
