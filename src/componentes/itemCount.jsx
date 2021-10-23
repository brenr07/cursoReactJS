import React from "react";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';


export const ItemCount = ({cantidad, modify, max}) => {

    const aumentar = () => {
        if (cantidad < max){
            modify(cantidad + 1)
        }
        
    } 
    const restar = () => {
        if (cantidad > 0) {
            modify(cantidad - 1)
        }
        
    }
    return ( 
        <Container fluid>
        
        <button 
            classname="btn btn-primary"
            onClick={restar}>
            -
        </button>
        <span classname="mx-3">{cantidad}</span>
        <button
            classname="btn btn-primarys" 
            onClick={aumentar}>
            +
        </button>
        {/* <button >Agregar al carrito</button> */}
        </Container>
     );
}
 
export default ItemCount;