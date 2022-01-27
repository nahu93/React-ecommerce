import { createContext, useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";

export const CartContext = createContext ([])

function CartContextProvider ({children}) {

    const [cartList,setCartList] = useState ([])
    

    const agregarProducto = (item) =>{
        const Temporal = cartList.find (e => e.id == item.id )

        if(Temporal){
            Temporal.cantidad+=item.cantidad
            return
        }
        setCartList([...cartList, item])
    }

    const vaciarCarrito =() =>{
        setCartList([])
    }
    
    const widgetProducts =() => {
        let total = 0


        cartList.map(item => { 
           total += item.cantidad
        }  )

       return total

    }

     
    
  

    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito,
            widgetProducts,
           
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider