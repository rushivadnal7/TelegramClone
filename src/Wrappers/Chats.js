import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 10px;
    gap: 0.5px;
    box-sizing: border-box;
    margin-top: 4rem;


     /* Custom scrollbar styles */
     &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: var(--gray);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary);
        border-radius: 10px;
        border: 3px solid gray;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--secondary);
    }

    /* scrollbar-width: thinner; */
    /* scrollbar-color: var(--primary) var(--light-gray); */

  
`   