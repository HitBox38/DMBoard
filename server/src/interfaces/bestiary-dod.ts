export interface bestiary_dod {
  name: string;
  isNamedCreature: boolean;
  source: string;
  page: number;
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
  senses: string[];
  passive: number;
  conditionImmune: string[];
  languages: string[];
  cr: string;
  spellcasting: object[];
  trait: object[];
  action: object[];
  traitTags: string[];
  senseTags: string[];
  actionTags: string[];
  languageTags: string[];
  damageTags: string[];
  spellcastingTags: string[];
  miscTags: string[];
  conditionInflict: string[];
  conditionInflictSpell: string[];
  hasToken: boolean;
  hasFluff: boolean;
  hasFluffImages: boolean;
}
