import React, { useContext } from 'react'
import { CartContext } from './CartContext'

export const CartScreen = () => {
    const {carrito, vaciarCarrito, removeItem, total} = useContext(CartContext)
    console.log(carrito)

    return (
        <div className="container my-5">
            <h2>Resumen de compra</h2>
            <hr/>

            {
                carrito.map( (prod) => (

                    <div>
                        <h4>{prod.name}</h4>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio: {prod.price * prod.cantidad}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>X</button>
                    </div>
                )) 
            }
            <h2>Total: {total} </h2>
            <hr/>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

