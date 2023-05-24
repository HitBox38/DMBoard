export interface feats {
  name: string;
  source: string;
  page: number;
  otherSources?: object[];
  prerequisite?: object[];
  ability?: object[];
  additionalSpells?: object[];
  entries: string[];
  skillProficiencies?: object[];
  hasFluffImages?: boolean;
  toolProficiencies?: object[];
  languageProficiencies?: object[];
  optionalfeatureProgression?: object[];
  resist?: string[];
  srd?: boolean;
  weaponProficiencies?: object[];
  armorProficiencies?: object[];
  savingThrowProficiencies?: object[];
  skillToolLanguageProficiencies?: object[];
  expertise?: object[];
  additionalSources?: object[];
}
