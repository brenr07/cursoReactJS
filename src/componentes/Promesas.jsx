// import React, {useState,useEffect} from 'react';
// import Item from './Item';

// function comprobarError(){
//     return (Math.random() < 0.5);
//   }
     
// function crearPromesas() {
//     return new Promise((resolve, reject) => {  

//     setTimeout(
//         function(){                
//             const error = comprobarError();           
//             if(!(error)){      
//                 resolve(DB_FOOD);  
//             }
//             else { 
//                 reject( new Error("Error obteniendo los datos"));
//             }
//         }, 
//         500);      
//     });     
// }


// function Promesas(){
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

// export default Promesas;