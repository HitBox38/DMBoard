export interface bestiary_hat_tg {
  name: string;
  isNamedCreature: boolean;
  source: string;
  size: string[];
  type: object;
  alignment: string[];
  ac: object[];
  hp: object;
  speed: object;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  save: object;
  skill: object;
  senses?: string[];
  passive: number;
  resist?: string[];
  languages: string[];
  cr: string;
  spellcasting?: object[];
  action: object[];
  bonus?: object[];
  reaction?: object[];
  senseTags?: string[];
  actionTags: string[];
  languageTags: string[];
  damageTags: string[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  miscTags: string[];
  conditionInflictSpell?: string[];
  hasToken: boolean;
  hasFluff: boolean;
  hasFluffImages: boolean;
  trait?: object[];
  conditionInflict?: string[];
  traitTags?: string[];
  conditionImmune?: string[];
}
