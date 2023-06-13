export interface IResources {
  wood: number;
  clay: number;
  reed: number;
  stone: number;
  grain: number;
  vegetable: number;
  sheep: number;
  boar: number;
  cattle: number;
  food: number;
  family: number;
  room: number;
  fence: number;
  barn: number;
  begging: number;
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
  is_barn: boolean;
}

export interface IFences {
  [idx: string]: number[];
}

export interface ICards {
  card_number: string;
  name: string;
  score: number;
  is_used: boolean;
  used_round: number;
}

export interface IScores {
  begging: number;
  boar: number;
  cage: number;
  cage_barn: number;
  cattle: number;
  clay_room: number;
  empty: number;
  family: number;
  farm: number;
  grain: number;
  sheep: number;
  stone_room: number;
  sum: number;
  vegetable: number;
}

export interface IPlayers {
  name: string;
  resource: IResources;
  fields: IFields[];
  house_type: string;
  fences?: IFences;
  cards: ICards[];
  scores: IScores;
}

export interface IBaseCards {
  card_number: string;
  is_stacked: boolean;
  count: number;
  resource: IResources;
  additional_action: any | null;
  player: number | null;
}

export interface IPrimaryCards {
  card_number: string;
  owner: number;
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
  primary_cards: IPrimaryCards[];
  common_resources: IResources;
}
