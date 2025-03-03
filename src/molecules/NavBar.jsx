'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FinanceProLogo } from '@/atoms';
import { NavBarElements } from '@/molecules';

const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 10vh;
    padding: 0px 60px;
    z-index: 30;
    transition: 1s ease;
    border-bottom: 2px solid rgb(255,255,255, 0.1);
    background-color: rgb(0,0,0, ${props => props.$opacity ? 0.5 : 1});
    @media (max-width: 768px) {
        
        padding: 0px 20px;
    }
    
    .wardons-logo{
        cursor: pointer;
        &:hover{
            transform: scale(1.05);
        }
    }

`
const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;

    svg path{
        filter: drop-shadow(inset 4px 6px 1px rgb(5, 5, 5)); 
    }
    :hover{
        transform: rotate(-45deg);
    }
    @media (min-width: 768px) {
        display: none;
    }
`


const NavBar = ({baseUrl}) => {
    const [ isScrolledThenChangeColor, setIsScrolledThenChangeColor ] = useState(false)
    
    const navBarSections = [
        {title: 'Entrar', sideBarMenu: 'login', children: <h1>Entrar</h1>},
        {title: 'Registrarse', sideBarMenu: 'registro', children: <h1>Registrarse</h1>},
      ]
    useEffect(()=>{
        const handleChangeColorOnNav = () => window.scrollY >= 30 ? setIsScrolledThenChangeColor(true) : setIsScrolledThenChangeColor(false)
        window.addEventListener('scroll', handleChangeColorOnNav)
    }, [window.scrollY])
    
    
    return (
        <HeaderContainer>
            <NavBarContainer $opacity={isScrolledThenChangeColor} >
                <FinanceProLogo/>
                <NavBarElements baseUrl={baseUrl} data={navBarSections} customSize='20px' color='#fff' hoverColor={'#E84C1A'} weight={600}/>
                {/* <CustomButton content='Cerrar sesión' type='secondary' action={handleLogout}/> */}
            </NavBarContainer>
        </HeaderContainer>
    )
}

export default NavBar
