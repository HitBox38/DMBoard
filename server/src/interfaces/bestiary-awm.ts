export interface bestiary_awm {
  name: string;
  isNpc?: boolean;
  isNamedCreature?: boolean;
  source: string;
  page: number;
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
  passive: number;
  cr: string;
  trait?: object[];
  action: object[];
  damageTags?: string[];
  miscTags: string[];
  conditionInflict?: string[];
  hasToken: boolean;
  hasFluff: boolean;
  traitTags?: string[];
  actionTags?: string[];
  hasFluffImages?: boolean;
  spellcasting?: object[];
  damageTagsSpell?: string[];
  spellcastingTags?: string[];
  environment?: string[];
  soundClip?: object;
}
