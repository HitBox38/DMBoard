export interface deities {
  name: string;
  source: string;
  page: number;
  pantheon: string;
  alignment?: string[];
  category?: string;
  domains?: string[];
  province?: string;
  symbol?: string;
  entries?: string[];
  title?: string;
  altNames?: string[];
  symbolImg?: object;
  additionalSources?: object[];
  srd?: boolean;
  piety?: boolean;
  basicRules?: boolean;
  _copy?: object;
  customExtensionOf?: string;
  reprintAlias?: string;
}
