import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [theme, setTheme] = useState("dark"); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ChatContext.Provider
      value={{ theme, setTheme, selectedChat, setSelectedChat, toggleTheme }}
    >
      {children}
    </ChatContext.Provider>
  );
};
