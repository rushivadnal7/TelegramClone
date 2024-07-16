import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Chatprovider } from "./Context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Chatprovider>
      <App />
    </Chatprovider>
  </React.StrictMode>
);
