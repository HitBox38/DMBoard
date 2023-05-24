export interface traps {
  name: string;
  source: string;
  page: number;
  trapHazType: string;
  tier?: number;
  threat?: string;
  effect?: string[];
  trigger?: string[];
  countermeasures?: string[];
  entries: string[];
  srd?: boolean;
  initiative?: number;
  eActive?: string[];
  eDynamic?: string[];
  eConstant?: string[];
  initiativeNote?: string;
}
