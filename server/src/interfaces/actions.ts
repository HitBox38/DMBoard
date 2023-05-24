export interface actions {
  name: string;
  source: string;
  page: number;
  srd?: boolean;
  basicRules?: boolean;
  time?: object[];
  entries: string[];
  seeAlsoAction?: string[];
  fromVariant?: string;
}
