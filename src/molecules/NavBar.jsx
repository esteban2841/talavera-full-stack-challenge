/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { CustomButton, FinanceProLogo } from '@/atoms';
import { NavBarElements } from '@/molecules';
import { StockContext } from '@/context';
import ProfileIcon from '@/atoms/ProfileIcon';
import StocksListModal from '@/atoms/StocksListModal';

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
const LeftSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    align-items: center;
    height: 70px;
    gap: 20px;
`

// const IconContainer = styled.div`
//     display: flex;
//     align-items: center;
//     width: 50px;
//     height: 50px;
//     cursor: pointer;

//     svg path{
//         filter: drop-shadow(inset 4px 6px 1px rgb(5, 5, 5)); 
//     }
//     :hover{
//         transform: rotate(-45deg);
//     }
//     @media (min-width: 768px) {
//         display: none;
//     }
// `

export function useMounted() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    return mounted
  }


const NavBar = ({baseUrl}) => {
    const [ isScrolledThenChangeColor, setIsScrolledThenChangeColor ] = useState(false)

    const isMounted = useMounted()
    
    const {activeStockListModal} = useContext(StockContext)
    const [user, setUser] = useState()
	console.log("TCL: NavBar -> user", user)
    const [userLogged, setUserLogged] = useState()
    const [renderSections, setRenderSections] = useState([])
    const withoutUserLoggedSections =  [
        {title: 'Entrar', sideBarMenu: 'login', children: <h1>Login</h1>},
        {title: 'Registrarse', sideBarMenu: 'registro', children: <h1>Register</h1>},
    ] 
    const withUserLoggedSections = (user)=>[
        {title: 'balance', href: 'stock', children: <span className='flex items-center justify-center'>
            <h2>{`$ ${user.balance}`}</h2>
        </span>},
        {title: 'account', sideBarMenu: 'account', children: <ProfileIcon user={user}/> },
    ]
     
    
    useEffect(() => {
        if (!isMounted) return
    
        const handleChangeColorOnNav = () => {
          setIsScrolledThenChangeColor(window.scrollY >= 30)
        }
    
        window.addEventListener('scroll', handleChangeColorOnNav)
        return () => window.removeEventListener('scroll', handleChangeColorOnNav)
      }, [isMounted])
    
      useEffect(() => {
        const userloggedStorage = localStorage.getItem('authToken')
        setUserLogged(userloggedStorage)
        const userInfo = JSON.parse(localStorage.getItem('user'))
        setUser(userInfo)
        userloggedStorage 
          ? setRenderSections(withUserLoggedSections(userInfo))
          : setRenderSections(withoutUserLoggedSections)
      }, [userLogged])
    
      if (!isMounted) return <div>Loading...</div>

    return (
        <HeaderContainer>
            <NavBarContainer $opacity={isScrolledThenChangeColor} >
                <LeftSectionContainer>
                    <FinanceProLogo/>
                    { userLogged && <CustomButton type='primary' bg='black' action={'toggleStockListModal'} args={!activeStockListModal} colorText='#0a0a0a' content={'+'} size='60'/>}
                    {activeStockListModal && <StocksListModal/>}
                </LeftSectionContainer>
                <NavBarElements baseUrl={baseUrl} data={renderSections} customSize='20px' color='#fff' hoverColor={'#E84C1A'} weight={600}/>
                {/* <CustomButton content='Cerrar sesión' type='secondary' action={handleLogout}/> */}
            </NavBarContainer>
        </HeaderContainer>
    )
}

export default NavBar
