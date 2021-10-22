import React from 'react';
import { useHistory } from 'react-router';

export const ItemDetail = ({id, name, price, img, description, category}) => {
    const {goBack, push} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const AddToCart = () => {
        const newItem = {
            id,
            name,
            price,
            category,
            cantidad
        }
    }
    return (
        <div className="container">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>

            <ItemCount cantidad={cantidad} modify={setCantidad}/>

            <button className="btn btn-success" onClick={AddToCart}>Agregar al carrito</button>

            <hr></hr>

            <button className="btn btn-primary" onClick={() => goBack()}>Volver</button>
            <button className="btn btn-outline-primary mx-4" onClick={() => push("/")}>Volver al inicio</button>
        </div>
    )
}