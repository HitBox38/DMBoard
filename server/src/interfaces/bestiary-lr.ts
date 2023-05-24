export interface bestiary_lr {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  size?: string[];
  type: object;
  alignment: string[];
  ac: object[];
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
  languages: string[];
  cr?: string;
  spellcasting?: object[];
  trait?: object[];
  action?: object[];
  traitTags?: string[];
  actionTags?: string[];
  languageTags: string[];
  damageTags: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  miscTags: string[];
  conditionInflictSpell?: string[];
  hasToken: boolean;
  _copy?: object;
  resist?: string[];
  legendary?: object[];
  legendaryGroup?: object;
  conditionInflict?: string[];
  conditionInflictLegendary?: string[];
  senses?: string[];
  immune?: string[];
  conditionImmune?: string[];
  senseTags?: string[];
}
