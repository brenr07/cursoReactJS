// import React, { useEffect, useState } from 'react';
// import ItemList from './ItemList';
// import {useParams} from 'react-router-dom';
// import ItemCount from './itemCount';



// const ItemListContainer = (props) => {
//     const resultado = useParams()
//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container px-5 py-12 mx-auto">
//                 <div className="flex flex-col text-center w-full mb-12">
//                     <h1 className="sm:text-3xl text-2xl font-large title-font mb-8 text-red-600">{props.title}</h1>
//                     <hr />
//                     <ItemList/>
//                 </div>    
//             </div>          
//          </section>
//     );
// }


// export default ItemListContainer;

import React, {useEffect, useState, useParams} from 'react';
import { pedirProductos } from './pedirProductos';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading (true)

        pedirProductos()
        .then((res) => {
            if (categoryId){
                setItems (res.filter(prod => prod.category === categoryId))
            } else {
                setItems(res)
            }
        })
        .catch ((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    return (
        <section className="container my-5">
            {
                loading
                ? <h2>Cargando...</h2>
                :<ItemList items={items}/>
            }
        </section>
    )
}