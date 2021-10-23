
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {CartContext} from './CartContext';

  
  export const Item = ({id, name, price, img, description, category}) =>{
    return(
      <Card style={{width:'18rem'}} classname="m-3" >
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Categoria: {category}</Card.Text>
          <Link to={ `/detail/${id}`}>
          <Button variant ="primary">VER</Button>
          </Link>
        </Card.Body>
      </Card>
    )
  }
