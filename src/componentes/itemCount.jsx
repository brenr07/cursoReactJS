
import React from 'react'


export const ItemCount = ( {cantidad, modify, max} ) => {

    const handleRestar = () => {
        if (cantidad > 1)  {
            modify(cantidad - 1)
        }
    }

    const handleSumar = () => {
        if (cantidad < max) {
            modify(cantidad + 1)
        }
    }

    return (
        <div>
            <button
                onClick={handleRestar}
                className={`btn ${cantidad === 1 ? "btn-danger desactivado" : "btn-secondary"}`}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button
                onClick={handleSumar}
                className={`btn ${cantidad === max ? "btn-danger desactivado" : "btn-secondary"}`}
            >
                +
            </button>
        </div>
    )
}