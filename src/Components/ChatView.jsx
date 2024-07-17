import React, { useState, useContext } from "react";
import {
  ChatHeader,
  Message,
  Wrapper,
  TypeMessage,
} from "../Wrappers/ChatView";
import Dark_theme_chat from "../assets/chat-theme-dark.jpeg";
import light_theme_chat from "../assets/chat-theme-light.jpeg";
import { ChatContext } from "../Context/ChatContext";

const ChatView = () => {
  const { selectedChat } = useContext(ChatContext);
  const { theme } = useContext(ChatContext);

  console.log(selectedChat);

  return (
    <>
      <Wrapper
        style={{
          backgroundImage:
            theme === "light"
              ? `url(${light_theme_chat})`
              : `url(${Dark_theme_chat})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
        <ChatHeader theme={theme}>
          <div className="profile-image">
            <div>{selectedChat.name?.slice(0, 1).toUpperCase()}</div>
          </div>
          <h1>{selectedChat.name}</h1>
        </ChatHeader>

        <Message theme={theme}>
          {selectedChat.message.map((message) => {
            console.log(message);
            return <div className="message">{message}</div>;
          })}
        </Message>

        <TypeMessage theme={theme}>
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
          <div className="sendmessage-svg">
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </TypeMessage>
      </Wrapper>
    </>
  );
};

export default ChatView;
