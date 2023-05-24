export interface bestiary_ps_z {
  name: string;
  source: string;
  page: number;
  _copy?: object;
  hasToken: boolean;
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
  conditionImmune?: string[];
  languages?: string[];
  cr?: string;
  spellcasting?: object[];
  trait?: object[];
  action?: object[];
  traitTags?: string[];
  senseTags?: string[];
  actionTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  miscTags?: string[];
  isNamedCreature?: boolean;
  immune?: string[];
  legendary?: object[];
  conditionInflict?: string[];
  damageTagsLegendary?: undefined[];
  soundClip?: object;
}