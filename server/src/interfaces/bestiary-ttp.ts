export interface bestiary_ttp {
  name: string;
  source: string;
  page: number;
  size?: string[];
  type?: string;
  alignment?: string[];
  ac?: object[];
  hp: object;
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
  cr: string;
  action?: object[];
  senseTags?: string[];
  actionTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  hasFluffImages?: boolean;
  trait?: object[];
  languages?: string[];
  spellcasting?: object[];
  reaction?: object[];
  traitTags?: string[];
  languageTags?: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  resist?: string[];
  immune?: string[];
  conditionImmune?: string[];
  _copy?: object;
}
