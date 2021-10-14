import React, { useEffect, useState } from 'react'
// import productos from '../../productos.json';

function Detalle(props) {

    const [identificador] = props.match.params.id;

    const [datos,setDatos] = useState({});

    const getDatos = ()=>{
        fetch('https://fakestoreapi.com/products/'+identificador)
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setDatos(resp)
        });
    }
    useEffect(()=>{
        getDatos();
    },[])

    return (
        <div className="col">
        <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={datos.image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{datos.title}</h5>
            <p className="card-text">
                {datos.description}
            {datos.category} - {datos.price}
            </p>
        </div>
        </div>
      </div>
    )
}

export default Detalle
