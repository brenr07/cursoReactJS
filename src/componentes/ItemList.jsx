// import React, {useState,useEffect} from 'react';
// import Item from './Item';

// const Productos = 
//     [
//       {
//         title: 'hamburguesa',
//         price: 450,
//         thumbnail:
//           'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//         id: 1,
//       },
//       {
//         title: 'pizza',
//         price: 800,
//         thumbnail:
//           'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//         id: 2,
//       },
//       {
//         title: 'papas fritas',
//         price: 300,
//         thumbnail:
//           'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//         id: 3,
//       },
//       {
//         title: 'empanadas',
//         price: 920,
//         thumbnail:
//           'https://images.pexels.com/photos/6535195/pexels-photo-6535195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//         id: 4,
//       },
//       {
//         title: 'lasaña',
//         price: 750,
//         thumbnail:
//           'https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//         id: 5,
//       },
//       {
//         title: 'カルボナーラ',
//         price: 850,
//         thumbnail:
//           'https://images.pexels.com/photos/5710170/pexels-photo-5710170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//         id: 6,
//       },
//       {
//         title: '握り寿司',
//         price: 1600,
//         thumbnail:
//           'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//         id: 7,
//       },
//   ];

// function comprobarError(){
//     return (Math.random() < 0.5);
//   }
     
// function crearPromesas() {
//     return new Promise((resolve, reject) => {  

//     setTimeout(
//         function(){                
//             const error = comprobarError();           
//             if(!(error)){      
//                 resolve(Productos);  
//             }
//             else { 
//                 reject( new Error("Error obteniendo los datos"));
//             }
//         }, 
//         500);      
//     });     
// }


// function ItemList(){
//     const [items,setItems] = React.useState(null);
//     const [estado,setEstado] = useState('Cargando...');

    
//     useEffect(() => {     
//         let requestDatos = crearPromesas();

//         requestDatos
//         .then( function(items_promise){
//             setItems(items_promise);     
//             setEstado('Listo!');           
//             console.log(items_promise);
//         })      

//         .catch( function(err){
//             console.log(err);   
//             setEstado('Error');       
//         })

//         .finally( ()=>{
//                 console.log('Promesa terminada');
//             }
//         )
//     }, []);
      
  
//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container px-5 py-6 mx-auto">        
//               <h3>{estado}</h3>  
//               <hr/>         
//             {(items !== null) && 
//                 items.map( (itm,index) =>
//                     <Item
//                         key={index}
//                         title={itm.title}
//                         price={itm.price}
//                         imgUrl={itm.thumbnail}
//                     />
//             )}                   
//             </div>
//       </section>
//     )  
// }

// export default ItemList;

import React, { useEffect, useState } from 'react'
import Item from './Item';

function ItemLIst() {

    const [items,setItems]=useState([]);

    const leerItems=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setItems(resp)
        });
    }

    useEffect(() => {
        leerItems();
    },[])

    return (
        <div className="container">
            <div className="row">
                {items.length>0 && items.map((item)=>{
                    return <Item id={item.id} category={item.category} image={item.image} price={item.price} title={item.title}/>
                })
                }
            </div>
            
        </div>
    )
}

export default ItemLIst;