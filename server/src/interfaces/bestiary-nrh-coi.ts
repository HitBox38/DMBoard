export interface bestiary_nrh_coi {
  name: string;
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
  skill: object;
  passive: number;
  languages: string[];
  cr: string;
  action: object[];
  languageTags: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  trait?: object[];
  traitTags?: string[];
}
