import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from './CartContext'
import Swal from 'sweetalert2'
import { generarOrden } from '../firebase/generarOrden'

export const Checkout = () => {
    
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:'',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.lenght < 3) {
            alert ("Nombre invalido")
            return
        }
        if (values.apellido.lenght < 3) {
            alert ("Apellido invalido")
            return
        }if (values.email.lenght < 3) {
            alert ("Email invalido")
            return
        }if (values.tel.lenght < 7) {
            alert ("Telefono invalido")
            return
        }
        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada!',
                    text: `Guarde su número: ${res}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Producto sin stock',
                    text: `No hay stock de: ${err.map(el => el.name).join(', ')}`
                })
            })
            .finally(false)
    }

    return (
        <>
        {carrito.lenght === 0 && <Redirect to="/"/>}
        <div>
            <h2>Complete sus datos</h2>
            <hr/>

            <div ClassName="container my-5">
                <form onSubmit={handleSubmit}>
                    <h2>Formulario</h2>
                    <input 
                        type="text"
                        className="form-control my-2"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleImputChange} 
                        />
                        {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                        <input 
                        type="text"
                        className="form-control my-2"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleImputChange} 
                        />
                        {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

                        <input 
                        type="email"
                        className="form-control my-2"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleImputChange} 
                        />
                        {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                        <input 
                        type="tel"
                        className="form-control my-2"
                        placeholder="Teléfono"
                        name="tel"
                        value={values.tel}
                        onChange={handleImputChange} 
                        />
                        {values.tel.length === 0 && <small>Este campo es obligatorio</small>}

                        <button classname="btn btn-success" type="submit">Finalizar compra</button>
                </form>

            </div>
        </div>
        </>
    )
}