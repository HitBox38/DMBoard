export interface vehicles {
  name: string;
  source: string;
  page: number;
  vehicleType: string;
  size?: string;
  dimensions?: string[];
  terrain: string[];
  capCrew?: number;
  capPassenger?: number;
  capCargo?: number;
  pace?: number;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  immune?: string[];
  conditionImmune?: string[];
  hull?: object;
  control?: object[];
  movement?: object[];
  weapon?: object[];
  other?: object[];
  srd?: string;
  ac?: number;
  speed?: object;
  hp?: number;
  entries?: string[];
  hasFluffImages?: boolean;
  hasFluff?: boolean;
  actionThresholds?: object;
  action?: string[];
  cost?: number;
  hasToken?: boolean;
  weight?: number;
  capCreature?: number;
  trait?: object[];
  actionStation?: object[];
  reaction?: object[];
  otherSources?: object[];
  capCrewNote?: string;
  type?: string;
}
