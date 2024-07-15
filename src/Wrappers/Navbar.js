import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    height: 4rem;
    background-color: var(--secondary);
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

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

    .side-navigator {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 80%;
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
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;
