import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../CartContext';
import { ItemCount } from './itemCount';

export const ItemDetail = ({id, name, price, img, description, category, stock}) => {
    const {goBack, push} = useHistory()

    const {addToCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }
        addToCart(newItem)
    }
    return (
        <div className="container">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>

            <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
            

            <button className="btn btn-success" onClick={handleAgregar}>Agregar al carrito</button>

            <hr></hr>

            <button className="btn btn-primary" onClick={() => goBack()}>Volver</button>
            <button className="btn btn-outline-primary mx-4" onClick={() => push("/")}>Volver al inicio</button>
        </div>
    )
}