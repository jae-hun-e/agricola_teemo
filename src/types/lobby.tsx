export interface IRoomList {
  room_id: number;
  host: number;
  participant: number;
  options: {
    title?: string;
    mode?: string;
    password?: string;
    is_chat?: true;
    time_limit?: number;
  };
}

export interface IDetailRoom {
  room_id: number;
  host: number;
  options: {
    title: string;
    is_chat: boolean;
    mode: string;
    password: string;
    time_limit: number;
  };
  participants: number[];
}
