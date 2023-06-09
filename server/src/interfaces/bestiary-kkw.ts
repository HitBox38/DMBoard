export interface bestiary_kkw {
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
  skill?: object;
  senses: string[];
  passive: number;
  languages?: string[];
  cr: string;
  trait: object[];
  action: object[];
  senseTags: string[];
  languageTags?: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  reaction?: object[];
  actionTags?: string[];
  hasFluffImages?: boolean;
  immune?: string[];
  conditionImmune?: string[];
  traitTags?: string[];
}
