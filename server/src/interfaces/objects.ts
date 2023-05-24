export interface objects {
  name: string;
  source: string;
  page: number;
  size: string;
  objectType: string;
  ac: number;
  hp: number;
  immune: string[];
  entries?: string[];
  actionEntries?: object[];
  hasToken?: boolean;
  hasFluffImages?: boolean;
  isNpc?: boolean;
  speed?: number;
  str?: number;
  dex?: number;
  int?: number;
  wis?: number;
  cha?: number;
  senses?: string[];
  srd?: boolean;
  resist?: string[];
  vulnerable?: string[];
}
