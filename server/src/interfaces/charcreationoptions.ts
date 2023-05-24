export interface charcreationoptions {
  name: string;
  source: string;
  page: number;
  prerequisite?: object[];
  optionType: string[];
  entries: string[];
  otherSources?: object[];
  hasFluffImages?: boolean;
}
