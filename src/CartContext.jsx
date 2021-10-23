import React, { createContext,useEffect,useState } from 'react'

export const  CartContext= createContext()
const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider=({children})=>{

    const [total, setTotal]=useState(0);

    useEffect(() => {
        let tot = 0;
        carrito.map((prod)=>{
            tot = tot + prod.price
        });

        setTotal(tot)

    }, [])

    const [carrito, setCarrito] = useState(init)
    console.log(carrito)

    const  addToCart = (item) => {
        setCarrito( [...carrito, item])
    }
    const removeItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !==itemId)
    setCarrito(newCart)
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}