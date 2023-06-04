export function connectSocket(namespace: string, id: number) {
  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const client = new WebSocket(baseURL + namespace + id);

  client.onopen = () => {
    console.log(`${namespace} Connected : `, client, id);
  };

  return client;
}
