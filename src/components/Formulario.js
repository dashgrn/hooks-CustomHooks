import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {
    const [data, setData] = useState({
        nombre: '',
        email: ''
    })

    const handleOnChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const { nombre, email } = data

    useEffect(() => {
        console.log('Se está montando', nombre);
        return () => {
            console.log('Se está desmontando')
        }
    }, [nombre])

    const handleSubmit = ({ evt }) => {
        evt.preventDefault()
    }

    return (
        <div>
            <h1>Formulario</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Correo Electronico" name="email" value={data.email} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={data.nombre} onChange={handleOnChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}

export default Formulario