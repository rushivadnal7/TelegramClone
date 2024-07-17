import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import useWindowSize from "../CustomHooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../Context/ChatContext";

export const Message = styled.div`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) =>
    theme === "light" ? `white` : "var(--gray)"};
  color: ${({ theme }) => (theme === "light" ? `var(--gray)` : "white")};
  display: flex;
  padding: 0px 1rem;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0px;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? `rgb(0, 0, 0, 0.1)` : "rgb(0, 0, 0, 0.2)")} ;
    cursor: pointer;
  }

  .profile {
    width: 20%;
  }

  .profile-photo {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--blue);
    background-color: aliceblue;
  }

  .message-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
  }

  .message-header,
  .message-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .Name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .message-body {
  }

  .message-count {
    height: max-content;
    background-color: var(--blue);
    padding: 0px 10px;
    border-radius: 10px;
  }
`;

const UserMessage = ({ item }) => {
  const { theme } = useContext(ChatContext);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const { setSelectedChat } = useContext(ChatContext);
  const [userChats, setUserChats] = useState([]);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const Name = item.creator.name;
  let userFirstMessage;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${item.id}`,
          requestOptions
        );
        const result = await response.json();
        setUserChats(result.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  userChats.slice(0, 1).map((msg) => {
    userFirstMessage = msg.message;
  });

  const truncatedMessage = userFirstMessage?.substring(0, 30) || "";

  const viewChatHandler = () => {
    setSelectedChat({
      id: item.id,
      name: Name ? Name : "unknown",
      message: userChats.map((msg) => msg.message),
    });

    if (width <= 900) {
      navigate("/chat");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Message theme={theme} onClick={viewChatHandler}>
        <div className="profile">
          <div className="profile-photo">{Name ? Name?.slice(0, 1) : "U"}</div>
        </div>
        <div className="message-content">
          <div className="message-header">
            <div className="Name">{Name ? Name : "Unknown"}</div>
          </div>
          <div className="message-footer">
            <div className="message-body">
              {truncatedMessage?.includes(" ")
                ? `${truncatedMessage}...`
                : `${truncatedMessage}`}
            </div>
            <div className="message-count">{item.msg_count}</div>
          </div>
        </div>
      </Message>
    </>
  );
};

export default UserMessage;
