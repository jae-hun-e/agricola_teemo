export interface IResources {
  wood?: number;
  clay?: number;
  reed?: number;
  stone?: number;
  grain?: number;
  vegetable?: number;
  sheep?: number;
  boar?: number;
  cattle?: number;
  food?: number;
  family?: number;
  room?: number;
  fence?: number;
  barn?: number;
}
export interface IFields {
  field_type: string;
  position: number;
  is_in: {
    family: number;
    sheep: number;
    boar: number;
    cattle: number;
    grain: number;
    vegetable: number;
  };
}

export interface IFences {
  [idx: string]: number[];
}

export interface ICards {
  card_number: string;
  name: string;
  score: number;
  is_use: boolean;
}

export interface IPlayers {
  name: string;
  resource: IResources;
  fields: IFields[];
  house_type: string;
  fences?: IFences;
  cards: ICards[];
}

export interface IBaseCards {
  card_number: string;
  is_stacked: boolean;
  count: number;
  resource: IResources | null;
  additional_action: any | null;
  player: number | null;
}

export interface IRoundCards extends IBaseCards {}
export interface IPlayData {
  first: number;
  turn: number;
  round: number;
  phase: number;
  players: IPlayers[];
  actions: any[];
  base_cards: IBaseCards[];
  round_cards: IRoundCards[];
  common_resources: IResources;
}
