export interface bestiary_nrh_tcmc {
  name: string;
  isNpc?: boolean;
  isNamedCreature: boolean;
  source: string;
  page: number;
  otherSources?: object[];
  _copy?: object;
  hasToken: boolean;
  size?: string[];
  type?: object;
  alignment?: string[];
  ac?: object[];
  hp?: object;
  speed?: object;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  skill?: object;
  passive?: number;
  languages?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  languageTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
}
