import React from 'react'
import {Item} from './Item'

export const ItemList =({items = []}) => {

    return(
        <div className="container">
            <h2>Nuestros productos</h2>
            <hr/>
            <div className="row">
                {items.map((item) => <Item {...item} key={item.id}/>)}

            </div>

        </div>
    )
}
