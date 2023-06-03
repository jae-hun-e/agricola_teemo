export function connectSocket(namespace: string, userId: number) {
  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const client = new WebSocket(baseURL + namespace + userId);

  client.onopen = () => {
    console.log("roomList Connected : ", client, userId);
  };

  return client;
}
