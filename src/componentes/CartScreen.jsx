import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const CartScreen = () => {
    const {carrito, vaciarCarrito, removeItem,calcularTotal} = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.lenght === 0
                ? <>
                    <h2>No hay productos agregados</h2>
                    <Link to = "/" className="btn btn-success">ir a comprar</Link>
                </>
                :
                <>
                <h2>Resumen de compra</h2>
                <hr/>

                    {
                    carrito.map( (prod) => (

                        <div>
                            <h4>{prod.name}</h4>
                            <p>Cantidad: {prod.cantidad}</p>
                            <p>Precio:$ {prod.price * prod.cantidad}</p>
                            <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                        </div>
                    )) 
                    }
            
                    <hr/>
                    <h2>Total: ${calcularTotal()} </h2>
                    <Link className="btn btn-success mx-3" to='/checkout'>Terminar mi compra</Link>
                    <hr/>
                    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                </>
            }
        </div>
    )
}

