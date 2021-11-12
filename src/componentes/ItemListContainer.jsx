import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {getFirestore} from '../firebase/config';
import { ItemList } from './ItemList'


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        
        const db = getFirestore()
        const itemCollection = categoryId 
                                    ? db.collection('productos').where('category', '==', categoryId)
                                    :db.collection('productos')

        itemCollection.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {setLoading(false)})

    }, [categoryId])

    return (
        <section className="container my-6">
            {
                loading
                ? <h2>Cargando...</h2>
                :<ItemList items={items}/>
            }
        </section>
    )
}