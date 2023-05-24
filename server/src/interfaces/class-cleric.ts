export interface class_cleric {
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
  startingProficiencies: object;
  startingEquipment: object;
  multiclassing: object;
  classTableGroups: object[];
  classFeatures: string[];
  subclassTitle: string;
  fluff: object[];
}
