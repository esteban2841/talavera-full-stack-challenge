'use client'
import React, { useReducer, useRef } from 'react'
import { StockContext } from './StockContext';
import { StockReducer } from './StockReducer';
import dotenv from 'dotenv';
import { useRouter } from 'next/navigation';

dotenv.config({ path: './.env.local' });
export interface SectionRef {
    current: HTMLElement,
    name: string
}

const INITIAL_STATE: StockContext = {
    activeSideBarMenu: '',
    user: {
        username: '',
        password: '',
        name: '',
        balance: 0,
    },
}

interface Props {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
  }

export const StockProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(StockReducer, INITIAL_STATE)

    const router = useRouter()
    const toggleSideBarMenu = (payload: StockContext) =>{
			console.log("TCL: toggleSideBarMenu -> payload", payload)
            
        dispatch({type:'toggleSideBarMenu', payload: payload})
    }
    
    const setUserLogged = async (payload: StockContext) =>{
       
        dispatch({type:'setUserLogged', payload: payload})
        
      
    }
    const logout = async (payload: StockContext) =>{
        
        dispatch({type:'logout', payload: payload})
        
        router.push('/')
        
        
    }
    


    return (
        <StockContext.Provider value={{
            ...state,
            toggleSideBarMenu,
            setUserLogged,
            logout,
        }}>
            {children}
        </StockContext.Provider>
    )
}


//name company

// safetyradar