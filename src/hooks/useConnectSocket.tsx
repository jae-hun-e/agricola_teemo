import { useEffect } from "react";

interface Props {
  namespace: string;
  userId: number;
}

export function connectSocket({ namespace, userId }: Props) {
  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const client = new WebSocket(baseURL + namespace + userId);
  client.onopen = () => {
    console.log("WebSocket Client Connected : ", namespace, userId);
  };
}
