export interface variantrules {
  name: string;
  source: string;
  page: number;
  ruleType?: string;
  entries: string[];
  type?: string;
  additionalSources?: object[];
  srd?: boolean;
}
