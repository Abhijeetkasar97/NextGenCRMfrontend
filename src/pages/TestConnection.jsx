import React, { useEffect, useState } from "react";
import api from "../services/api";

const TestConnection = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/test")
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        console.error("Connection error:", err);
        setMessage("Failed to connect to backend ❌");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔗 Backend Connection Test</h2>
      <p>{message}</p>
    </div>
  );
};

export default TestConnection;
