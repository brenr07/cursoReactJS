
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {CartContext} from '../CartContext';

// function Item({id,category,image,price,title}) {

  // const [carrito,setCarrito]=useContext(CartContext)

  // function agregar(){
  //   const producto ={
  //     id:id,
  //     category:category,
  //     image:image,
  //     price:price,
  //     title:title
  //   }
  //   const temp = carrito;
  //   temp.push(producto);
  //   setCarrito(temp)
  //   console.log(carrito);
  // }


  //   return (
  //       <div className="col">
  //         <div className="card" style={{ width: "18rem" }}>
  //         <img className="card-img-top" src={image} alt="imagen_producto" style={{width: "200px"}}/>
  //         <div className="card-body">
  //             <h5 className="card-title">{title}</h5>
  //             <p className="card-text">
  //             {category} - {price}
  //             </p>
  //             <Link className="btn btn-secondary" to={'/Productos/'+id}>VER</Link>
  //             <button className="btn btn-primary" onClick={agregar}>Agregar al carrito</button>
  //         </div>
  //         </div>
  //       </div>
  //   );
  // }
  
  // export default Item;
  
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
