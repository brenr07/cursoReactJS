import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContext';


const CartWidget = () => {
    const {calcularCantidad} = useContext(CartContext)
    return (
        <div> 
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{calcularCantidad}</span>
        </div>
    );
}

export default CartWidget;