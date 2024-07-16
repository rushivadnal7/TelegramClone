import React, { useEffect, useState } from "react";
import UserMessage from "./UserMessage";
import { Wrapper } from "../Wrappers/Chats";

const Chats = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://devapi.beyondchats.com/api/get_all_chats?page=0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        //   console.log(result.data.data);
        setData(result.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  fetch(
    "https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  return (
    <>
      <Wrapper>
        {data.map((item, id) => {
          return <UserMessage key={id} item={item} />;
        })}
      </Wrapper>
    </>
  );
};

export default Chats;
