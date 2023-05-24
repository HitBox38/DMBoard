export interface bestiary_ua_cfv {
  name: string;
  source: string;
  page: number;
  summonedByClass: string;
  size: string[];
  type: string;
  alignment: string[];
  ac: number[];
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
  languages: string[];
  trait: object[];
  action: object[];
  traitTags: string[];
  senseTags: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  conditionInflict?: string[];
}