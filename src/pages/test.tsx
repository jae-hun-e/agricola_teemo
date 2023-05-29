import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

let socket = socketIOClient("ws://127.0.0.1:8000/ws/v1/chat/3/1");

const Test = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    socketInitializer();

    return () => {
      socket.disconnect();
    };
  }, []);

  async function socketInitializer() {
    await fetch("./api/socket");

    socket.on("receive-message", (data) => {
      console.log(data);
      setAllMessages((pre) => [...pre, data]);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("emitted");

    socket.emit("send-message", {
      username,
      message,
    });
    setMessage("");
  }

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
            placeholder="enter your message"
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
