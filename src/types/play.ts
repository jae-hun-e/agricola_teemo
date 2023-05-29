export interface action_on_round {
  action: string;
  player: string;
  is_kid: boolean;
}
interface Resources {
  reed: number;
  wood: number;
  cow: number;
  grain: number;
  vegetable: number;
  sheep: number;
  food: number;
  clay: number;
  stone: number;
  pig: number;
}
export interface IPlayData {
  turn: number;
  round: number;
  phase: number;
  action_on_round: action_on_round[];
  common_resources: Resources;
  players: [
    {
      name: string;
      avatar: string;
      resources: {
        reed: number;
        wood: number;
        cow: number;
        grain: number;
        vegetable: number;
        sheep: number;
        food: number;
        clay: number;
        stone: number;
        pig: number;
        fence: number;
        barn: number;
        family: number;
      };
      job_cards: [
        {
          number: string;
          name: string;
          image: string;
          is_use: true;
        }
      ];
      main_facility_cards: [
        {
          number: string;
          name: string;
          image: string;
          is_use: true;
        }
      ];
      sub_facility_cards: [
        {
          number: string;
          name: string;
          image: string;
          is_use: true;
        }
      ];
      fields: [
        {
          type: string;
          position: [number, number];
          fences: [];
          in: {
            family: number;
            kid: number;
            sheep: number;
            cattle: number;
            boar: number;
          };
        }
      ];
      fences: number[][];
    },
    {
      name: string;
      resources: {
        reed: number;
        wood: number;
        cow: number;
        grain: number;
        vegetable: number;
        sheep: number;
        food: number;
        clay: number;
        stone: number;
        pig: number;
        fence: number;
        barn: number;
        family: number;
      };
    },
    {
      name: string;
      resources: {
        reed: number;
        wood: number;
        cow: number;
        grain: number;
        vegetable: number;
        sheep: number;
        food: number;
        clay: number;
        stone: number;
        pig: number;
        fence: number;
        barn: number;
        family: number;
      };
    },
    {
      name: string;
      resources: {
        reed: number;
        wood: number;
        cow: number;
        grain: number;
        vegetable: number;
        sheep: number;
        food: number;
        clay: number;
        stone: number;
        pig: number;
        fence: number;
        barn: number;
        family: number;
      };
    }
  ];
}
