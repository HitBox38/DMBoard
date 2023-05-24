export interface hazards {
  name: string;
  source: string;
  page: number;
  trapHazType?: string;
  entries: string[];
  otherSources?: object[];
}
