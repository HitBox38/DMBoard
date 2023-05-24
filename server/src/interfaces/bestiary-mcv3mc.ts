export interface bestiary_mcv3mc {
  name: string;
  source: string;
  page: number;
  size: string[];
  type: string;
  alignment: string[];
  alignmentPrefix?: string;
  ac: number[];
  hp: object;
  speed: object;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  senses?: string[];
  passive: number;
  resist?: object[];
  immune?: string[];
  conditionImmune?: string[];
  cr: string;
  trait: object[];
  action?: object[];
  traitTags?: string[];
  senseTags?: string[];
  actionTags?: string[];
  damageTags: string[];
  miscTags: string[];
  hasToken: boolean;
  hasFluff: boolean;
  hasFluffImages: boolean;
  skill?: object;
  save?: object;
  languages?: string[];
  languageTags?: string[];
  conditionInflict?: string[];
}
