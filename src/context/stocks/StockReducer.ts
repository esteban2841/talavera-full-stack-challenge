import { StockContext } from './StockContext';

export const StockReducer = (state: StockContext, action: any) : StockContext => {
    switch (action.type) {
        case 'toggleSideBarMenu':
            return{
                ...state,
                activeSideBarMenu: action.payload
            }
        
        case 'toggleStockListModal':
            return{
                ...state,
                activeStockListModal: action.payload
            }
        
        case 'setUserLogged':
            
            return {
                ...state,
                usuario: action.payload
            }
        case 'setStockListGainers':
            console.log("TCL: action.payload", action.payload)
            
            return {
                ...state,
                stockGainersList: action.payload
            }
        case 'logout':
                
            

            return {
                ...state,
                usuario: {
                    usuario: '',
                    contraseña: '',
                    correo: '',
                    celular: '',
                    direccion: '',
                    ciudad: {id: 0, name: ''},
                    departamento: {id: 0, name: ''},
                }
            }
            
            default:
            return state
    } 
}