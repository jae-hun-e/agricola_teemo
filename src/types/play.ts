interface IResources {
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
}
interface IFields {
  filed_type: string;
  position: number;
  is_in: any;
}

interface IPlayers {
  name: string;
  resources: IResources;
  fields: IFields[];
  cards: any[];
  fences: Object;
}

interface IBaseCards {
  card_number: string;
  is_stacked: boolean;
  count: number;
  resource?: IResources;
  additional_action: any | null;
}

export interface IPlayData {
  first: number;
  turn: number;
  round: number;
  phase: number;
  players: IPlayers[];
  actions: any[];
  base_cards: IBaseCards[];
  round_cards: any[];
  common_resources: IResources;
}
