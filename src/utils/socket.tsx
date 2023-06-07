import { IBaseCards } from "@ITypes/play";

export function connectSocket(namespace: string, id?: number) {
  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const client = id
    ? new WebSocket(baseURL + namespace + id)
    : new WebSocket(baseURL + namespace);

  client.onopen = () => {
    console.log(`${namespace} Connected : `, client);
  };

  return client;
}

export function sendActionSocket(
  socket: WebSocket | null,
  card: IBaseCards,
  userId: number
) {
  const actionSend = {
    command: "action",
    card_number: card.card_number,
    player: userId,
  };
  socket?.send(JSON.stringify(actionSend));
}
