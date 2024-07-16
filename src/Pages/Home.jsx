import React from "react";
import { Wrapper } from "../Wrappers/Home";
import Navbar from "../Components/Navbar";
import Chats from "../Components/Chats";

import Dark_theme_chat from '../assets/chat-theme-dark.jpeg'

const Home = () => {
  return (
    <Wrapper>
      <section className="left-section">
        <Navbar />
        <Chats/>
      </section>
      <section style={{ backgroundImage: `url(${Dark_theme_chat})` , backgroundRepeat: 'repeat-x' , backgroundSize:'contain'}} className="right-section">
      </section>
    </Wrapper>
  );
};

export default Home;
