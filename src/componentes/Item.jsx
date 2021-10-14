
import React from 'react';
import {Link} from 'react-router-dom'

function Item({id,category,image,price,title}) {
    return (
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="imagen_producto" style={{width: "200px"}}/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
              {category} - {price}
              </p>
              <Link className="btn btn-secondary" to={'/Productos/'+id}>VER</Link>
          </div>
          </div>
        </div>
    );
  }
  
  export default Item;
  