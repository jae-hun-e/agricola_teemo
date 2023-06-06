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

export interface DetailRoom {}
