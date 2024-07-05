
import React, { createContext, useContext, useEffect, useState } from 'react'
import { buyCart, buyProduct, getCart, quitProduct } from '../Fetching/cartFetching'


const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cart, setCart] = useState(null)
    useEffect(() => {
            if(localStorage.getItem('auth-token')){
                getCart()
                .then(cart => {
                    setCart(cart.items)
                })
            }
        },
        []
    )
    

    const handleBuyProduct = (pid) => {
        buyProduct(pid).then(
            cart =>  {
                if(cart.message === "Token inválido"){
                    window.location.href = '/login'
                }
                else{
                    setCart(cart.items)
                }
            }
        )
    }

    const handleDeleteProduct= (pid, redirect) => {
        quitProduct(pid).then(
            cart => {
                if(cart.message === "Token inválido"){
                    reditect('/login')
                    window.location.href = '/login'
                }
                else{
                    setCart(cart.items)
                }
            }
        )
    }

    const getItemFromCart = (pid) => {
        if(cart){
            const itemFound = cart.find(item => item.id === pid)
            if(itemFound){
                return itemFound.cartQuantity
            }
            
        }
        return 0
    }

    const handleBuyCart = () => {
        buyCart().then(newCart => {
            setCart(newCart.items)
        })
    }
    

    return (
        <CartContext.Provider value={{cart,handleBuyProduct, handleDeleteProduct, getItemFromCart, handleBuyCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


/* Custom Hook para usar el contexto de carrito */
export const useCartContext = () => useContext(CartContext)

