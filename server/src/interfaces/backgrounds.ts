export interface backgrounds {
  name: string;
  source: string;
  page: number;
  srd?: boolean;
  basicRules?: boolean;
  skillProficiencies?: object[];
  languageProficiencies?: object[];
  startingEquipment?: object[];
  entries?: object[];
  hasFluff: boolean;
  toolProficiencies?: object[];
  feats?: object[];
  fromFeature?: object;
  hasFluffImages?: boolean;
  _copy?: object;
  additionalSpells?: object[];
  additionalSources?: object[];
  otherSources?: object[];
  prerequisite?: object[];
}
