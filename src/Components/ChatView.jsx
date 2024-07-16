import React, { useState, useContext } from "react";
import { ChatHeader, Message, Wrapper } from "../Wrappers/ChatView";
import Dark_theme_chat from "../assets/chat-theme-dark.jpeg";
import { ChatContext } from "../Context/ChatContext";

const ChatView = () => {
  const { selectedChat } = useContext(ChatContext);

  console.log(selectedChat);

  return (
    <>
      <Wrapper
        style={{
          backgroundImage: `url(${Dark_theme_chat})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
        <ChatHeader>
          <div className="profile-image">
            <div>{selectedChat.name?.slice(0, 1).toUpperCase()}</div>
          </div>
          <h1>{selectedChat.name}</h1>
        </ChatHeader>

        <Message>
          {selectedChat.message.map((message) => {
            console.log(message)
            return <div className="message">{message}</div>;
        })}
        </Message>
      </Wrapper>
    </>
  );
};

export default ChatView;
