export interface bestiary_phb {
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
  senses: string[];
  passive: number;
  trait: object[];
  action: object[];
  senseTags: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
}
