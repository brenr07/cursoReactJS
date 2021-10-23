import React from "react"
import {stock} from "./stock" 


export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve (stock)
        }, 1000)
    }
    )
}