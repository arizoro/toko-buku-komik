import { createContext } from "react";
import { data } from "../data";
import { useState } from "react";

export const GlobalContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1 ; i < data.length +1 ; i++ ){
        cart[i] = 0
    }
    return cart
}

export const ShopingCartProvider = (props) => {
    const [cartItem,setCartItem] = useState(getDefaultCart())

    const getTotalAmount = () => {
        let totalAmount = 0
        for(const buku in cartItem){
            if(cartItem[buku] > 0 ){
                let itemInfo = data.find((product) => product.id === Number(buku))
                totalAmount += cartItem[buku] * itemInfo.harga
                // console.log(totalAmount)
            }
        }
        console.log(totalAmount)
        return totalAmount
    }

    const addCartItem = (bukuId) => {
        setCartItem((prev) => ({...prev, [bukuId] : prev[bukuId] + 1 }))
    }

    const removeCartItem = (bukuId) => {
        setCartItem((prev) => ({...prev, [bukuId] : prev[bukuId] - 1 }))
    }

    const updateCartItem = (bukuId, insertAmount) => {
        setCartItem((prev) => ({...prev, [bukuId] : insertAmount }))
    }

    const checkOut = () => {
        setCartItem(getDefaultCart)
    }

    const contexValue = {
        cartItem,
        addCartItem,
        removeCartItem,
        updateCartItem,
        getTotalAmount,
        checkOut
    }

    return (
        <GlobalContext.Provider value={contexValue} >
            {props.children}
        </GlobalContext.Provider>
    )
}