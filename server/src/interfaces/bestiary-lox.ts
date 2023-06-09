export interface bestiary_lox {
  name: string;
  source: string;
  page: number;
  _copy?: object;
  hasToken: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
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
  senses?: string[];
  passive?: number;
  resist?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  traitTags?: string[];
  senseTags?: string[];
  actionTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  hasFluffImages?: boolean;
  shortName?: boolean;
  spellcasting?: object[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  hasFluff?: boolean;
}
