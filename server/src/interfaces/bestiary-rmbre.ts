export interface bestiary_rmbre {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
  size?: string[];
  type?: string;
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
  senses?: string[];
  passive?: number;
  immune?: string[];
  conditionImmune?: string[];
  languages?: string[];
  cr?: string;
  trait?: object[];
  action?: object[];
  traitTags?: string[];
  senseTags?: string[];
  languageTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  hasToken: boolean;
  hasFluff?: boolean;
  _copy?: object;
  actionTags?: string[];
  hasFluffImages?: boolean;
  group?: string[];
}
