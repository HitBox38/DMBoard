export interface class_sorcerer {
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
  optionalfeatureProgression: object[];
  startingProficiencies: object;
  startingEquipment: object;
  multiclassing: object;
  classTableGroups: object[];
  classFeatures: string[];
  subclassTitle: string;
  fluff: object[];
}
