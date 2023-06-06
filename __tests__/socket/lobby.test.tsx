import WS from "jest-websocket-mock";

const server = new WS("ws://127.0.0.1:8000/ws/v1/lobby/");

const client = new WebSocket("ws://127.0.0.1:8000/ws/v1/lobby/");
await server.connected;
