import React from "react";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';


const ItemCount = () => {

    const [contador, setContador] = useState(0)
    const aumentar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }
    return ( 
        <Container fluid>
        <p>El contador va: {contador}</p>
        <button onClick={aumentar}>+</button>
        <button onClick={restar}>-</button>
        </Container>
     );
}
 
export default ItemCount;