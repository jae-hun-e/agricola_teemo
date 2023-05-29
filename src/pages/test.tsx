import React, { useEffect, useState } from "react";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
let client;
const Test = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    client = new WebSocket("ws://127.0.0.1:8000/ws/v1/chat/3/1");
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    client.send(
      JSON.stringify({
        command: "message",
        message: message,
      })
    );
    setMessage("");
  };
  return (
    <div>
      <h1>Chat app</h1>
      <h1>Enter a username</h1>

      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <div>
        {allMessages.map(({ username, message }, index) => (
          <div key={index}>
            {username}: {message}
          </div>
        ))}

        <br />

        <form onSubmit={handleSubmit}>
          <input
            name="message"
            placeholder="test msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete={"off"}
          />
        </form>
      </div>
    </div>
  );
};

export default Test;
