import React, {createContext, useState} from 'react';

export const CartContext=createContext();

export const CartProvider=(props)=>{
    const[carrito,setCarrito]=useState([]);

    return{
        
    }
}