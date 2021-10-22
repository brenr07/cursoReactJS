import {stock} from "./stock" 

export const pedirProductos = () => {
    return newPromise((resolve, reject) => {
        setTimeout(()=>{
            resolve (stock)
        }, 1000)
    }
    )
}