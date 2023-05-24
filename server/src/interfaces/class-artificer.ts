export interface class_artificer {
  name: string;
  source: string;
  page: number;
  isReprinted?: boolean;
  hd: object;
  proficiency: string[];
  spellcastingAbility: string;
  casterProgression: string;
  spellsKnownProgression?: number[];
  startingProficiencies: object;
  startingEquipment: object;
  classTableGroups: object[];
  classFeatures: object[];
  subclassTitle: string;
  preparedSpells?: string;
  cantripProgression?: number[];
  optionalfeatureProgression?: object[];
  multiclassing?: object;
  fluff?: object[];
  otherSources?: object[];
}
