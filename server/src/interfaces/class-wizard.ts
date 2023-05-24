export interface class_wizard {
  name: string;
  source: string;
  page: number;
  srd: boolean;
  basicRules: boolean;
  hd: object;
  proficiency: string[];
  spellcastingAbility: string;
  casterProgression: string;
  preparedSpells: string;
  cantripProgression: number[];
  spellsKnownProgressionFixed: number[];
  spellsKnownProgressionFixedAllowLowerLevel: boolean;
  startingProficiencies: object;
  startingEquipment: object;
  multiclassing: object;
  classTableGroups: object[];
  classFeatures: string[];
  subclassTitle: string;
  fluff: object[];
}
