/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { createContext } from 'react'

export interface User {
    name: string,
    username: string,
    password:string,
    balance?: number
}

export interface StockContext {

    [key: string]: any;
    //sidebar actions
    activeSideBarMenu?: string
    toggleSideBarMenu?: (payload: any) => void

    //user actions login and register
    user?: User
    fetchUsuario?: (payload: any) => void

    //product details and cart state
    // filled from fetching the products from the product-data on app component to render catalog

    //cart actions
    setUserLogged?: (payload: any) => void
    logout?: (payload: any) => void

    
}

export const StockContext = createContext({} as StockContext)