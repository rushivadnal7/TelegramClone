import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const NavLink = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
    height: 4.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    /* border-bottom: 1px solid black; */
`
const NavigationLinks = ({text , icon , navigateTo}) => {
    const navigate = useNavigate()

  return (
    <NavLink onClick={() => navigate(`/${navigateTo}`)}>
        {icon}
        <span>{text}</span>
    </NavLink>
  )
}

export default NavigationLinks