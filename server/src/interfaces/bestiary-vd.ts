export interface bestiary_vd {
  name: string;
  shortName: string;
  isNamedCreature: boolean;
  source: string;
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
  save: object;
  skill: object;
  senses: string[];
  passive: number;
  resist: string[];
  immune: object[];
  conditionImmune: string[];
  languages: string[];
  cr: string;
  spellcasting: object[];
  trait: object[];
  action: object[];
  bonus: object[];
  reactionHeader: string[];
  reaction: object[];
  legendaryGroup: object;
  altArt: object[];
  traitTags: string[];
  senseTags: string[];
  actionTags: string[];
  languageTags: string[];
  damageTags: string[];
  damageTagsSpell: string[];
  spellcastingTags: string[];
  miscTags: string[];
  conditionInflict: string[];
  hasToken: boolean;
  hasFluff: boolean;
  hasFluffImages: boolean;
}
