export interface Player {
  id: string;
  image?: string;
  name: string;
  race: string;
  class: string;
  subclass: string;
  level: number;
  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
}
