import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    height: calc(100vh - 4rem);
    margin: 4rem 0px;
    background-repeat: repeat;

    @media (min-width: 900px) {
        width: 100%;
        height: 100%;
    }
`

export const ChatHeader = styled.div`

    width: 100%;
    height: 4rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--gray);
    display: flex;
    padding: 5px 20px;

    .profile-image{
        width: 10%;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .profile-image div{
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: var(--blue);
        width: 3rem;
        height: 3rem;
        background-color: aliceblue;
    }

    h1{
        width: 90%;
        font-size: 1.5rem;
        text-transform: capitalize;
    }

    @media (min-width: 900px) {
        width: 65%;
    }
`

export const Message = styled.div`
    height: calc(100vh - 8rem);
    margin: 4rem 0px 4rem 4rem;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column-reverse;


    .message{
        width: max-content;
        max-width: 70%;
        background-color: var(--gray);
        margin: 8px;
        border-radius: 5px;
        padding: 1rem;
        color: white;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary);
        border-radius: 10px;
        border: 3px solid rgb(0,0,0,0.5);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--secondary);
    }
`