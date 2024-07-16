import React from "react";
import styled from "styled-components";

export const Message = styled.div`
  width: 100%;
  height: 7rem;
  background-color: var(--gray);
  display: flex;
  padding: 0px 1rem;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0px;

  &:hover {
    background-color: rgb(0,0,0,0.2); /* Example hover effect */
    cursor: pointer; 
  }

  .profile {
    width: 20%;
  }

  .profile-photo {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
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

  .Name{
    font-size: 1.2rem;
    font-weight: 600;

  }

  .message-count {
    background-color: var(--blue);
    padding: 0px 10px;
    border-radius: 10px;
  }
`;

const UserMessage = ({ item }) => {
    console.log(item)
  const Name = item.creator.name;
  return (
    <>
      <Message>
        <div className="profile">
          <div className="profile-photo"></div>
        </div>
        <div className="message-content">
          <div className="message-header">
            <div className="Name">{Name ? Name : "Unknown"}</div>
          </div>
          <div className="message-footer">
            <div className="message-body">message</div>
            <div className="message-count">{item.msg_count}</div>
          </div>
        </div>
      </Message>
    </>
  );
};

export default UserMessage;
