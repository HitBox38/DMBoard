export interface bestiary_esk {
  name: string;
  source: string;
  page: number;
  level: number;
  size: string[];
  type: object;
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
  passive: number;
  languages: string[];
  trait: object[];
  action: object[];
  languageTags: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  spellcasting?: object[];
  altArt?: object[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  reaction?: object[];
}
