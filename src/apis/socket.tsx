import { IBaseCards } from "@ITypes/play";

export function connectSocket(namespace: string, id?: number) {
  const baseURL = process.env.NEXT_PUBLIC_WS_BASE_URL;
  const client = id
    ? new WebSocket(baseURL + namespace + id)
    : new WebSocket(baseURL + namespace);

  client.onopen = () => {
    // console.log(`${namespace} Connected : `, client);
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

export function sendAdditionalSocket(
  socket: WebSocket | null,
  card: IBaseCards,
  userId: number,
  additionalCard: string | object
) {
  const actionSend = {
    command: "additional",
    card_number: card.card_number,
    player: userId,
    additional: additionalCard,
  };
  socket?.send(JSON.stringify(actionSend));
}

export function sendChangeSocket(
  socket: WebSocket | null,
  userId: number,
  additional: { positions: number[]; animals: string }
) {
  const actionSend = {
    command: "always",
    card_number: "WILD_01",
    player: userId,
    additional: additional,
  };
  socket?.send(JSON.stringify(actionSend));
}
