import React, { useEffect, useState } from "react";
import UserMessage from "./UserMessage";
import { Wrapper } from "../Wrappers/Chats";

const Chats = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const [Chatdata, setChatData] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch(
          "https://devapi.beyondchats.com/api/get_all_chats?page=0",
          requestOptions
        );
        const result = await response.json();
        setChatData(result.data.data);
        
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <>
      <Wrapper>
        {Chatdata.map((item, id) => {
          return <UserMessage key={id} item={item}  />;
        })}
      </Wrapper>
    </>
  );
};

export default Chats;
