import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from './CartContext'
import { ItemCount } from './itemCount';
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, name, price, img, description, category, stock}) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }
        if(cantidad > 0){
            addToCart(newItem)
        }
    }

    const styles = {
        btnAgregar: isInCart(id)
    }
    return (
        <div className="itemDetail">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>

            {isInCart(id)
            ? <Link to="/cart" className="btn btn-success">COMPRAR</Link>
            :
                <>
                    <ItemCount cantidad={cantidad} modify={setCantidad} max={stock} />
                    <hr/>
                    <button className="btn btn-outline-secondary mx-4" onClick={handleAgregar}>Agregar al carrito</button>
                </>}

            <hr/>

            <button className="btn btn-secondary" onClick={() => goBack()}>Volver</button>
            <hr/>
            <button className="btn btn-secondary" onClick={() => push("/")}>Volver al inicio</button>
        </div>
    )
}