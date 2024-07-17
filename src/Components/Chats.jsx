import React, { useEffect, useState  , useContext} from "react";
import UserMessage from "./UserMessage";
import { Wrapper } from "../Wrappers/Chats";
import { ChatContext } from "../Context/ChatContext";

const Chats = () => {
  const { theme} = useContext(ChatContext);
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
      <Wrapper theme={theme}>
        {Chatdata.map((item, id) => {
          return <UserMessage key={id} item={item} />;
        })}
      </Wrapper>
    </>
  );
};

export default Chats;
