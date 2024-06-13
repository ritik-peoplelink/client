import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Input,
} from "@material-ui/core";
function ChatInterface() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSendMessage = async () => {
    const bodyPayload = JSON.stringify({ query: query });
    const response = await fetch("http://localhost:5001/chat-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyPayload,
    });

    const data = await response.json();
    if (data && data?.error?.error) {
      setMessages((prevItems) => [...prevItems, data?.error?.error?.type]);
    }
  };
  return (
    <div className="centerDiv">
      <Card>
        <CardContent>
          <Typography variant="h5">Chat with your chatbot</Typography>
          <div style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
            <Input
              placeholder="Enter your query..."
              value={query}
              onChange={handleInputChange}
              style={{ flex: 1, marginRight: 16 }}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <div style={{ maxHeight: 300, overflowY: "auto", marginTop: 16 }}>
            {console.log(messages)}
            {messages &&
              messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Typography variant="body1">{message}</Typography>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default ChatInterface;
