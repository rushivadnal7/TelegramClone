import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100Vh;
    display: flex;
    
    .left-section{
        position: relative;
        width: 100%;
        height: 100%;

        @media (min-width: 900px) {
            width: 35%;
            background-color: var(--gray);
        }
    }

    .right-section{
        display: none;

        @media (min-width: 900px) {
            display: block;
            width: 65%;
            background-image: url('../assets/chat-theme-light.jpeg');
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
    
` 