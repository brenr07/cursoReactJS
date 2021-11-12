
import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

  
  export const Item = ({id, name, price, img, category}) =>{
    return(
      <Card style={{width:'16rem'}} classname="m-3" >
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Categoria: {category}</Card.Text>
          <Link to={ `/detail/${id}`}>
          <Button variant ="secondary">VER</Button>
          </Link>
        </Card.Body>
      </Card>
    )
  }
