export interface optionalfeatures {
  name: string;
  source: string;
  page: number;
  featureType: string[];
  entries: string[];
  srd?: boolean;
  prerequisite?: object[];
  isClassFeatureVariant?: boolean;
  consumes?: object;
  otherSources?: object[];
  additionalSpells?: object[];
  previousVersion?: object;
  skillProficiencies?: object[];
  senses?: object[];
  optionalfeatureProgression?: object[];
}
