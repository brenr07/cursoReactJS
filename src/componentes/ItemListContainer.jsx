import React from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import ItemCount from './itemCount';



const ItemListContainer = (props) => {
    const resultado = useParams()
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-large title-font mb-8 text-red-600">{props.title}</h1>
                    <hr />
                    <ItemList/>
                    <ItemCount stock={5} initial={1}/>
                </div>    
            </div>          
         </section>
    );
}


export default ItemListContainer;