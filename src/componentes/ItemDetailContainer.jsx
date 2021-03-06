import React, { useEffect, useState,} from 'react';
import{useParams} from 'react-router'
import {ItemDetail} from './ItemDetail';
import { getFirestore } from '../firebase/config'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState (false)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading (true)
        const db = getFirestore()
        const itemCollection = db.collection('productos')
        const item = itemCollection.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    },[itemId])

    return (
        <div>
            {
                loading ? <h2>Cargando...</h2>
                :<ItemDetail {...item}/>
            }
        </div>
    )
}


