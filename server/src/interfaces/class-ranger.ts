export interface class_ranger {
  name: string;
  source: string;
  page: number;
  srd?: boolean;
  hd: object;
  proficiency: string[];
  spellcastingAbility?: string;
  casterProgression?: string;
  spellsKnownProgression?: number[];
  optionalfeatureProgression: object[];
  startingProficiencies: object;
  startingEquipment: object;
  multiclassing?: object;
  classTableGroups?: object[];
  classFeatures: string[];
  subclassTitle: string;
  fluff?: object[];
}
