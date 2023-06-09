export interface bestiary_ua_ar {
  name: string;
  source: string;
  page: number;
  size: string[];
  type: string;
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
  skill: object;
  senses: string[];
  passive: number;
  immune: string[];
  conditionImmune: string[];
  languages: string[];
  trait: object[];
  actionNote: string;
  action: object[];
  senseTags: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  reaction?: object[];
}
