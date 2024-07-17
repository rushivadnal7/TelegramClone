import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    height: 4rem;
    background-color: var(--secondary);
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000; 

    @media (min-width: 900px) {
        
    }
    

    .hamburger-menu-logo {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .search-input{
        display: none;
    }
    
    

    .search-icon{
        @media (min-width: 900px) {
            display: none;
        }
    }

    .side-navigator {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 80%;
        z-index: 20;
        background-color: var(--primary);
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        
    }

    .side-navigator.open {
        transform: translateX(0);
    }

    .profile-container {
        height: 20%;
        width: 100%;
        background-color: var(--secondary);
        position: relative;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
    }

    .profile-image {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: aliceblue;
    }

    .theme-icon {
        /* position: absolute; */
        /* top: 1px;
        right: 20px; */
        background-color: aliceblue;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .theme-icon input{
        position: absolute;
        opacity: 0;
    }

    .sun{
        color: var(--blue);
        filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
    }


    .toggle{
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 
        inset 0 8px 60px rgba(0, 0, 0, 0.1), 
        inset 0 8px 8px rgba(0, 0, 0, 0.1), 
        inset 0 -4px 4px rgba(0, 0, 0, 0.1), 
        ;
        z-index: -1;
        background-color: var(--gray);
    }


    input:checked~.toggle{
        background-color: var(--blue);
    }

    .icon-size{
        width: 2rem;
        height: 2rem;
    }
    
    
    @media (min-width: 900px) {
        &{
         background-color: var(--gray);
        width: 35%;
        padding: 0px 15px;
        border-bottom: 1px solid black;
        }

        .logo{
            display: none;
        }
        .search-input{
        display: block;
        width: 80%;
        padding: 0.5rem 1rem ;
        border-radius: 30px;
    }

        .side-navigator{
            top: 20px;
            height: max-content;
            left: 40px;
            width: max-content;
            padding: 0px 20px;
            border-radius: 10px;
            transition: all 1s ease-in;
            box-shadow: 0 2px 8px 10px rgba(0, 0, 0, 0.2); 
            transform: scale(-0%);
            background-color: var(--gray);
        }

        .profile-container{
            background-color: var(--gray);
        }
        
        .profile-image , .userInfo{
            display: none;
        }
        
        .icon-size{
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 10;
`;