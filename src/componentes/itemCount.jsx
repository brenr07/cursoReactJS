import React from "react";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';


const ItemCount = (props) => {

    const [contador, setContador] = useState(props.initial); 
    
    // function aumentar() {
    //     contador < props.stock ? setContador(contador + 1)
    // };

    // function restar() {
    //     contador > 0 ? setContador(contador - 1)
    // };

    function aumentar (){
        setContador(contador + 1)
    }
    function restar (){
        setContador(contador - 1)
    }
    return ( 
        <Container fluid>
        
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={aumentar}>+</button>
        <p>Stock disponible: {props.stock}</p>
        <button>Agregar al carrito</button>
        
        </Container>
     );
}
 
export default ItemCount;