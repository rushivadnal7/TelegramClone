import React, { useState , useContext } from "react";
import { Wrapper } from "../Wrappers/Home";
import Navbar from "../Components/Navbar";
import Chats from "../Components/Chats";


import ChatView from "../Components/ChatView";
import { ChatContext } from "../Context/ChatContext";

const Home = () => {

  const { selectedChat } = useContext(ChatContext);

  return (
    <Wrapper>
      <section className="left-section">
        <Navbar />
        <Chats />
      </section>
      <section
        
        className="right-section"
      >
        {selectedChat && <ChatView/>}
      </section>
    </Wrapper>
  );
};

export default Home;
