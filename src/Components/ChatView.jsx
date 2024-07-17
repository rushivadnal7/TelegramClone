import React, { useState, useContext } from "react";
import {
  ChatHeader,
  Message,
  Wrapper,
  TypeMessage,
} from "../Wrappers/ChatView";
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
            console.log(message);
            return <div className="message">{message}</div>;
          })}
        </Message>

        <TypeMessage>
          <div className="sticker-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </div>
          <input type="text" className="input-text" />
        </TypeMessage>
      </Wrapper>
    </>
  );
};

export default ChatView;
