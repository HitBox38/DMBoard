export interface class_warlock {
  name: string;
  source: string;
  page: number;
  srd: boolean;
  hd: object;
  proficiency: string[];
  spellcastingAbility: string;
  casterProgression: string;
  cantripProgression: number[];
  spellsKnownProgression: number[];
  spellsKnownProgressionFixedByLevel: object;
  optionalfeatureProgression: object[];
  startingProficiencies: object;
  startingEquipment: object;
  multiclassing: object;
  classTableGroups: object[];
  classFeatures: string[];
  subclassTitle: string;
  fluff: object[];
}
